# 전처리

from konlpy.tag import Komoran
# 파일을 쓸 때 텍스트 데이터를 저장
# 피클을 쓰면 파이썬 객체를 바이너리 형태로 저장 할 수 있음
import pickle

class Preprocessing:
    def __init__(self, word2index_dic='', userdic=None):
        if(word2index_dic !=''):
            f = open(word2index_dic, "rb")
            self.word_index = pickle.load(f)
            f.close
        else:
            self.word_index = None
        
        self.komoran = Komoran(userdic=userdic)
        self.exclusion_tags = [
            "JKS",
            "JKC",
            "JKG",
            "JKO",
            "JKB",
            "JKV",
            "JKQ",
            "JX",
            "JC",
            "SF",
            "SP",
            "SS",
            "SE",
            "SO",
            "EP",
            "EF",
            "EC",
            "ETN",
            "ETM",
            "XSN",
            "XSV",
            "XSA",
        ]
        
    # 품사태깅
    def pos(self, sentence) :
        return self.komoran.pos(sentence)
    
    # 불용어(필요없는 품사) 제거, 필요한 품사 정보만 가져오기
    def get_keywords(self, pos, without_tag=False):
        f = lambda x : x in self.exclusion_tags
        word_list = []
        
        for p in pos:
            if f(p[1]) is False:
                word_list.append(p if without_tag is False else p[0])
        return word_list
    
    # 토큰을 인덱스로 변환
    def get_wordindex_sequence(self, keyword):
        if self.word_index is None:
            return []

        w2i = []
        for word in keyword:
            try:
                w2i.append(self.word_index[word])
            except KeyError:
                w2i.append(self.word_index['OOV'])
        return w2i