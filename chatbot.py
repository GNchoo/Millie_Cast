import random
import json
import pickle
import numpy as np
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
from tensorflow.keras.models import load_model

from util import *
import re
from konlpy.tag import Komoran
import tkinter as tk
import requests

API_KEY = "37138d0e18d1a1d87e8da3a2c2c5bf96" # 카카오 rest api

komoran = Komoran()

with open('intents.json', 'r', encoding='utf-8') as f:
  intents = json.load(f)

with open('words.pkl', 'rb') as f:
  all_words = pickle.load(f)

with open('classes.pkl', 'rb') as f:
  classes = pickle.load(f)

model = load_model('chatbot_model.h5')

def clean_up_sentence(sentence):
  sentence = re.sub(r'[^\w\s]', '', sentence) # 모든 구두점 제거
  w = komoran.pos(sentence) # 형태소 분석
  w = custom_morphs(w)  # 품사를 따져 불필요한 것은 버림
  return w

def predict_class(sentence):
  tokenized_sentence = clean_up_sentence(sentence)
  bow = bag_of_words(tokenized_sentence, all_words)
  bow = np.array(bow).reshape(1, -1)
  res = model.predict(bow)

  threshold = 0.01
  results = [[i, r] for i, r in enumerate(res[0]) if r > threshold]

  results.sort(key=lambda x: x[1], reverse=True)
  
  pred_list = {}
  for r in results:
    pred_list[classes[r[0]]] = r[1]
  
  return pred_list

def get_response(pred_list, intents_json):
  for key, value in pred_list.items():
    tag = key
    prob = value
    break
  
  if prob < 0.2:
    return "무슨 말씀이신지..."

  list_of_intents = intents_json['intents']
  for item in list_of_intents:
    if item['tag'] == tag:
      result = random.choice(item['responses'])
      break
  return result

def search_book(query):
  headers = {
    "Authorization": "KakaoAK " + API_KEY
  }
  params = {
    "query": query,
    "size": 5
  }
  response = requests.get("https://dapi.kakao.com/v3/search/book", headers=headers, params=params)
  if response.status_code == 200:
    data = response.json()
    books = data['documents']
    if books:
      result = "검색 결과:\n"
      for book in books:
        title = book['title']
        author = book['authors'][0]
        publisher = book['publisher']
        result += f"제목: {title}\n저자: {author}\n출판사: {publisher}\n\n"
      return result.strip()
    else:
      return "검색 결과가 없습니다."
  else:
    return "책 검색에 실패했습니다."

def chatbot_response(msg):
  if msg.startswith("책검색:"):
    query = msg[5:].strip()
    if query:
      return search_book(query)
    else:
      return "검색어를 입력하세요."
  else:
    ints = predict_class(msg)
    res = get_response(ints, intents)
    return res

def send():
  msg = EntryBox.get("1.0",'end-1c').strip()
  EntryBox.delete("0.0", tk.END)

  if msg != '':
    ChatLog.config(state=tk.NORMAL)
    ChatLog.insert(tk.END, "나: " + msg + '\n\n')
    ChatLog.config(foreground="#442265", font=("Verdana", 12))

    res = chatbot_response(msg)
    ChatLog.insert(tk.END, "봇: " + res + '\n\n')

    ChatLog.config(state=tk.DISABLED)
    ChatLog.yview(tk.END)

base = tk.Tk()
base.title("도서봇")
base.geometry("400x500")
base.resizable(width=tk.FALSE, height=tk.FALSE)

ChatLog = tk.Text(base, bd=0, bg="#F2F3F4", height="8", width="50", font="Arial")
ChatLog.config(state=tk.DISABLED)

scrollbar = tk.Scrollbar(base, command=ChatLog.yview, cursor="heart")
ChatLog['yscrollcommand'] = scrollbar.set

SendButton = tk.Button(base, font=("Verdana",12,'bold'), text="보내기", width="12", height=5, bd=0, bg="#ABB2B9", activebackground="#ABB2B9", fg='#ffffff', command=send)

EntryBox = tk.Text(base, bd=0, bg="#F2F3F4", width="29", height="5", font="Arial")

scrollbar.place(x=376, y=6, height=386)
ChatLog.place(x=6, y=6, height=386, width=370)
EntryBox.place(x=128, y=401, height=90, width=265)
SendButton.place(x=6, y=401, height=90)

base.mainloop()
