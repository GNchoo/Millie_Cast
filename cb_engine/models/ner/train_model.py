import tensorflow as tf
from tensorflow import keras
from sklearn.model_selection import train_test_split
import numpy as np
from seqeval.metrics import f1_score
from sklearn.metrics import classification_report

from utils.preprocessing import Preprocessing

def read_file(filename):
    sent = []
    with open(filename, 'r', encoding='utf-8') as f :
        lines = f.readlines()
        for idx, l in enumerate(lines):
            # 새로운 문장이 시작될 때 초기화
            if l[0] == ';' and lines[idx + 1][0] == '$':
                this_sent = []
            # 두번째 줄 아무동작 안하고 건너뜀
            elif l[0] == '$' and lines[idx-1][0] == ';':
                continue
            # 마지막 줄(비어있는 줄) sent배열을 채워주기
            elif l[0] == '\n':
                sent.append(this_sent)
            else:
                this_sent.append(tuple(l.split()))
    return sent

p = Preprocessing(word2index_dic = 'cb_engine/train_tools/dict/chatbot_dict.bin', userdic='cb_engine/utils/user_dic.tsv')

corpus = read_file('cb_engine/models/ner/ner_train.txt')

sentences = []
tag = []
for t in corpus :
    sen = []
    bio = []
    for w in t:
        sen.append(w[1])
        bio.append(w[3])
    sentences.append(sen)
    tag.append(bio)

tag_tokenizer = keras.preprocessing.text.Tokenizer(lower=False)
tag_tokenizer.fit_on_texts(tag)

voca_size = len(p.word_index) + 1
tag_size = len(tag_tokenizer.word_index) + 1

# 단어 시퀀스
x_train = [p.get_wordindex_sequence(sent) for sent in sentences]
y_train = tag_tokenizer.texts_to_sequences(tag)

index_to_word = p.word_index
index_to_ner = tag_tokenizer.index_word
index_to_ner[0] = 'PAD'

x_train = keras.utils.pad_sequences(x_train, padding='post', maxlen=40)
y_train = keras.utils.pad_sequences(y_train, padding='post', maxlen=40)

x_train, x_test, y_train, y_test = train_test_split(x_train, y_train, test_size=0.2)

y_train = tf.keras.utils.to_categorical(y_train, num_classes=tag_size)
y_test = tf.keras.utils.to_categorical(y_test, num_classes=tag_size)

# 모델 Bi-LSTM

model = keras.Sequential()

# mask_zero -> 패딩으로 만들어진 0값을 다음 레이어로 전달하지 않는다
model.add(keras.layers.Embedding(input_dim=voca_size, output_dim=30, input_length=40, mask_zero=True))

# Bidirectional -> 양방향
# dropout -> 레이어 빠져나갈때 드롭아웃 
# recurrent_dropout -> 순환할때 드롭아웃
model.add(keras.layers.Bidirectional(keras.layers.LSTM(200, return_sequences=True, dropout=0.5, recurrent_dropout=0.25)))

# TimeDistribution -> 밀집층에서 3차원 데이터 받을 수 있게
model.add(keras.layers.TimeDistributed(keras.layers.Dense(tag_size,activation='softmax')))

model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
model.fit(x_train, y_train, batch_size=128, epochs=10)

model.save('ner_model.h5')

