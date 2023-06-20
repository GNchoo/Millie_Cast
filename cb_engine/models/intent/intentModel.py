import tensorflow as tf
from keras.models import Model, load_model
from keras import preprocessing
import numpy as np

# 만들어놓은 h5파일 이용해서 의도 분류

class IntentModel :
    def __init__(self,model_name, proprocess):
        
        # 클래스별 레이블
        self.label = {0:"인사", 1:"욕설", 2:"검색", 3:"구독 확인", 4:"구독 취소", 5:"기타"}
        
        # 분류모델 불러오기
        self.model = load_model(model_name)
        
        # 전처리 객체
        self.p = proprocess
        
    # 의도 클래스 예측
    def predict_class(self, query):
        # 형태소 분석
        pos = self.p.pos(query)
        kewords = self.p.get_keywords(pos, without_tag=True)
        sequence = [self.p.get_wordindex_sequence(kewords)]
        
        pad_seqs = tf.keras.preprocessing.sequence.pad_sequences(sequence, maxlen=15, padding="post")
        
        pred = self.model.predict(pad_seqs)
        # 소프트맥스 함수로 된 배열 리턴
        pred_class = tf.math.argmax(pred, axis=1)
        return pred_class.numpy()[0]
        