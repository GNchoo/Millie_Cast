from utils.preprocessing import Preprocessing

import pandas as pd
import tensorflow as tf
from tensorflow import keras
from keras import preprocessing
from keras.layers import Input,Embedding,Dense, Dropout, convolutional,Conv1D, GlobalMaxPooling1D, concatenate

train_file = 'cb_engine\models\intent/total_train_data.csv'
data = pd.read_csv(train_file, delimiter=',')
query = data['query'].tolist()
intent = data['intent'].tolist()

p = Preprocessing(word2index_dic = 'cb_engine/train_tools/dict/chatbot_dict.bin', userdic='cb_engine/utils/user_dic.tsv')

sequence = []
for sententce in query:
    pos = p.pos(sententce)
    keywords = p.get_keywords(pos, without_tag=True)
    seq = p.get_wordindex_sequence(keywords)
    sequence.append(seq)

# 모든 토큰 길이를 맞춰주기 위해 패딩을 채워주는거
pad_seq = keras.utils.pad_sequences(sequence, maxlen=15, padding='post')

ds = tf.data.Dataset.from_tensor_slices((pad_seq, intent))
ds = ds.shuffle(len(intent))

train_size = int(len(pad_seq)*0.7)
val_size = int(len(pad_seq)*0.2)
test_size = int(len(pad_seq)*0.1)

train_ds = ds.take(train_size).batch(20)
val_ds = ds.skip(train_size).take(val_size).batch(20)
test_ds = ds.skip(train_size + val_size).take(test_size).batch(20)

EMB_SIZE = 128
EPOCH = 5
VOCA_SIZE = len(p.word_index) + 1

# input layer
input_layer = Input(shape=(15,))

# embedding layer
embedding_layer = Embedding(VOCA_SIZE, EMB_SIZE, input_length=15)(input_layer)

# dropout layer
dropout_emb = Dropout(rate=0.5)(embedding_layer)

# 합성곱(3-gram, 4-gram, 5-gram)
conv1 = Conv1D(filters=128, kernel_size=3, padding='valid', activation='relu')(dropout_emb)
pool1 = GlobalMaxPooling1D()(conv1)

conv2 = Conv1D(filters=128, kernel_size=4, padding='valid', activation='relu')(dropout_emb)
pool2 = GlobalMaxPooling1D()(conv2)

conv3 = Conv1D(filters=128, kernel_size=5, padding='valid', activation='relu')(dropout_emb)
pool3 = GlobalMaxPooling1D()(conv3)

concat = concatenate([pool1, pool2, pool3])
hidden = Dense(128, activation='relu')(concat)

dropout_hidden= Dropout(rate= 0.5)(hidden)

logit = Dense(5, name="logit")(dropout_hidden)

# 최종 노드가 5개인 이유 -> 분류하고자 하는 의도가 5개이기 떄문
pred = Dense(5, activation='softmax')(dropout_hidden)

model = keras.models.Model(input_layer, pred)

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics='accuracy')

model.fit(train_ds, epochs=EPOCH, validation_data=val_ds, verbose=1)

loss, accuracy = model.evaluate(test_ds, verbose=1)

print(loss)
print(accuracy)

model.save('intent_model.h5')