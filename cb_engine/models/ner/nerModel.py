import tensorflow as tf
from tensorflow.keras.models import Model, load_model
from tensorflow.keras import preprocessing
import numpy as np
import requests
import redis
import json


class NerModel:
    def __init__(self, model_name, proprocess):

        # BIO 태그 클래스 별 레이블
        self.index_to_ner = {1: 'O', 2: 'B_BOOK', 3: 'I', 0: 'PAD'}
    
        # 의도 분류 모델 불러오기
        self.model = load_model(model_name)

        # 챗봇 Preprocess 객체
        self.p = proprocess

    def predict_tags(self, query):
        # 형태소 분석
        pos = self.p.pos(query)

        # 문장내 키워드 추출(불용어 제거)
        keywords = self.p.get_keywords(pos, without_tag=True)
        sequences = [self.p.get_wordindex_sequence(keywords)]

        # 패딩처리
        max_len = 40
        padded_seqs = tf.keras.preprocessing.sequence.pad_sequences(sequences, padding="post", value=0, maxlen=max_len)

        predict = self.model.predict(np.array([padded_seqs[0]]))
        predict_class = tf.math.argmax(predict, axis=-1)

        tags = []
        for tag_idx in predict_class.numpy()[0]:
            if tag_idx == 1: continue
            tags.append(self.index_to_ner[tag_idx])

        if len(tags) == 0: return None
        return tags

    def predict(self, query):
        # 형태소 분석
        pos = self.p.pos(query)

        # 문장내 키워드 추출(불용어 제거)
        keywords = self.p.get_keywords(pos, without_tag=True)
        sequences = [self.p.get_wordindex_sequence(keywords)]

        # 패딩처리
        max_len = 40
        padded_seqs = tf.keras.preprocessing.sequence.pad_sequences(sequences, padding="post", value=0, maxlen=max_len)  

        predict = self.model.predict(np.array([padded_seqs[0]]))
        predict_class = np.argmax(predict, axis=-1)

        tags = [self.index_to_ner[i] for i in predict_class[0]]
        return list(zip(keywords, tags))
    
    @staticmethod
    def get_initials(word):
        CHOSUNG_LIST = [
            'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
        ]

        initials = []
        for char in word:
            if char.isalpha() and char.isascii():
                initials.append(char)
            else:
                unicode_val = ord(char) - ord('가')
                if 0 <= unicode_val < 11172:
                    cho_idx = unicode_val // 588
                    initials.append(CHOSUNG_LIST[cho_idx])

        return ''.join(initials)
    
    dataset = []
    
    def create_redis_client(self):
        return redis.Redis(
            host='redis-15246.c290.ap-northeast-1-2.ec2.cloud.redislabs.com',
            port=15246,
            password='j0eSSufPBijBpeqVxhKS3NtixeqaTcXf'
    )
        
    def search_books(self, query):
        entities = self.predict(query)  # 입력된 문장에 대해 NER 수행하여 entity 추출
        book_entities = [entity for entity in entities if entity[1] == 'B_BOOK']  # 책 관련 entity 필터링
        book_names = [entity[0] for entity in book_entities]  # 추출된 책 이름들
        redis_client = self.create_redis_client()
        cache_key = f"book_names:{book_names}"
        cached_data = redis_client.get(cache_key)
        if cached_data:
            # 캐시된 데이터가 존재하는 경우, 해당 데이터 반환
            decoded_data = cached_data.decode('utf-8')
            decoded_data = json.loads(decoded_data)
            return decoded_data
        
        url = "https://dapi.kakao.com/v3/search/book?target=title"
        headers = {
            "Authorization": "KakaoAK " + "6f17079cca732d80079d4b3ed644bcca"
        }
        book_names_str = ",".join(book_names)
        response = requests.get(url, params={"query": book_names_str, "size": 10}, headers=headers)
        data = response.json()

        if "documents" in data:
            for document in data["documents"]:
                title = document["title"]
                isbn = document["isbn"]
                existing_book = next(
                    (book for book in self.dataset if book["title"] == title), None
                )
                if existing_book is None or isbn not in existing_book["isbn"]:
                    if existing_book is not None:
                        existing_book["isbn"].append(isbn)
                    else:
                        self.dataset.append({"title": title, "isbn": [isbn]})

        grouped_results = {}
        matched_results = []

        for book in self.dataset:
            matched_names = [
                name for name in book_names
                if name in book["title"] or name in self.get_initials(book["title"])
            ]
            if len(matched_names) > 0:
                matched_results.append({
                    "title": book["title"],
                    "isbn": book["isbn"],
                    "matched_names": matched_names
                })

        grouped_results = {}
        matched_results = []

        for book in self.dataset:
            matched_names = [
                name for name in book_names
                if name in book["title"] or name in self.get_initials(book["title"])
            ]
            if len(matched_names) > 0:
                matched_results.append({
                    "title": book["title"],
                    "isbn": book["isbn"],
                    "matched_names": matched_names
                })

        for result in matched_results:
            title = result["title"].split()[0]
            if title in grouped_results:
                grouped_results[title]["isbn"] += result["isbn"]
                grouped_results[title]["matched_names"] += result["matched_names"]
            else:
                grouped_results[title] = {
                    "title": result["title"],
                    "isbn": result["isbn"],
                    "matched_names": result["matched_names"]
                }

        matched_results = list(grouped_results.values())
        matched_results = sorted(
            matched_results,
            key=lambda x: len(x["matched_names"]),
            reverse=True
        )
        
        matched_names = []
        for result in matched_results:
            matched_names.extend(result["matched_names"])
            
        

        if len(matched_results) > 0:
            # 결과를 Redis에 캐시 저장
            redis_client.set(cache_key, json.dumps([result["title"] for result in matched_results], ensure_ascii=False))
            return [result["title"] for result in matched_results]
        else:
            return '일치하는 결과를 찾을 수 없습니다.'





