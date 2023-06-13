import random
import json
import pickle
import numpy as np
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3' 
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Activation, Dropout
from tensorflow.keras.optimizers import SGD
from util import *
import re
from konlpy.tag import Komoran
komoran = Komoran()

with open('intents.json', 'r', encoding='utf-8') as f:
  intents = json.load(f)

words = []
classes = []
documents = []

# 의도와 패턴을 추출하여 words와 documents에 저장
for intent in intents['intents']:
  for pattern in intent['patterns']:
    pattern = re.sub(r'[^\w\s]', '', pattern)
    w = komoran.pos(pattern)
    w = custom_morphs(w)
    words.extend(w)
    documents.append((w, intent['tag']))
    if intent['tag'] not in classes:
      classes.append(intent['tag'])

words = sorted(set(words))
classes = sorted(set(classes))

#words.pkl과 classes.pkl 파일에 단어와 클래스 저장
pickle.dump(words, open('words.pkl', 'wb'))
pickle.dump(classes, open('classes.pkl', 'wb'))

training = []
output_empty = [0] * len(classes)

class2index = {}
for i, class_name in enumerate(classes):
  class2index[class_name] = i

#Bag of Words 생성
for document in documents:
  bag = []
  word_patterns = document[0]

  for word in words:
    bag.append(1) if word in word_patterns else bag.append(0)

  output_row = list(output_empty)
  output_row[class2index[document[1]]] = 1
  training.append([bag, output_row])

random.shuffle(training)
training = np.array(training, dtype=object)

train_x  = list(training[:, 0])
train_y  = list(training[:, 1])

vocab_size = len(words)
tag_size = len(classes)

model = Sequential()
model.add(Dense(units=128, input_shape=(vocab_size, ), activation='relu'))
model.add(Dropout(0.5))
model.add(Dense(units=64, activation='relu'))
model.add(Dropout(0.5))
model.add(Dense(tag_size, activation='softmax'))

# 경사 하강법 옵티마이저 설정
sgd = SGD(learning_rate=0.01, momentum=0.9, nesterov=True)
model.compile(loss='categorical_crossentropy', optimizer=sgd, metrics=['accuracy'])

model.summary()

# 훈련 데이터 학습
history = model.fit(np.array(train_x), np.array(train_y), epochs=200, batch_size=5, verbose=1)
model.save('chatbot_model.h5', history)
