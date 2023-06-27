import sys
sys.path.append("D:/Do/Workspace/python/chatbot")

from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from cb_engine.configs.DatabaseConfig import *
from cb_engine.utils.Database import Database
from cb_engine.utils.preprocessing import Preprocessing
from cb_engine.models.intent.intentModel import IntentModel
from cb_engine.models.ner.nerModel import NerModel
from cb_engine.utils.FindAnswer import FindAnswer
import uvicorn
import os
from dotenv import load_dotenv
import time
import jwt


load_dotenv()


def extract_user_id_from_token(token):
    try:
        # JWT 토큰 디코딩
        decoded_token = jwt.decode(token, algorithms=['HS256'], options={"verify_signature": False})

        # "sub" 필드의 값을 추출
        user_id = decoded_token.get('sub')

        return user_id
    except jwt.PyJWTError:
        # 토큰 디코딩 중 에러가 발생한 경우 None 반환
        return None

if __name__ == "__main__":
    host = os.getenv("host")
    port = os.getenv("port")
    uvicorn.run("main:app", host=host, port=int(port), reload=True)

app = FastAPI()


p = Preprocessing(word2index_dic='D:/Do/Workspace/python/chatbot/cb_engine/train_tools/dict/chatbot_dict.bin', userdic='D:/Do/Workspace/python/chatbot/cb_engine/utils/user_dic.tsv')

intent = IntentModel(model_name="D:\Do\Workspace\python\chatbot\cb_engine\models\intent\intent_model.h5", proprocess=p)
ner = NerModel(model_name="D:/Do/Workspace/python/chatbot/cb_engine/models/ner/ner_model.h5", proprocess=p)



# CORS 정책 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # 클라이언트 주소
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/chatbot")
def chatbot(query: str, token: str = None):
    start = time.time()     
    # 데이터베이스 객체
    db = Database(
        host=DB_HOST,
        user=DB_USER,
        password=DB_PASSWORD,
        db_name=DB_NAME,
        port=DB_PORT
    )
    db.connect()
    
    # 의도 파악
    predict = intent.predict_class(query)
    intent_name = intent.label[predict]

    ner_predict = ner.predict(query)
    tag = ner.predict_tags(query)

    # 답변 검색
    try:
        f = FindAnswer(db)
        answer_text = f.search(intent_name, tag)
        answer = f.tag_to_word(ner_predict, answer_text)
    except:
        answer = "죄송해요, 무슨 말인지 모르겠어요"
    if intent_name == "검색":
        results = ner.search_books(query)
        print(results)
        end = time.time()
        print(f"{end - start:.5f} sec")
        return {
            "query": query,
            "intent": intent_name,
            "ner": ner_predict,
            "answer": answer,
            "search_results": results,  # 책 검색 결과를 반환값에 추가
        }
    if intent_name == "구독 확인":
        id = extract_user_id_from_token(token)
        data = f.searchToSubscribe(id)
        
        end = time.time()
        print(f"{end - start:.5f} sec")
        return {
            "query": query,
            "intent": intent_name,
            "ner": ner_predict,
            "answer": answer,
            "date": data  # 백엔드 API 요청 결과를 반환값에 추가
    }
    else:
        end = time.time()
        print(f"{end - start:.5f} sec")
        return {
            "query": query,
            "intent": intent_name,
            "ner": ner_predict,
            "answer": answer
        }
        
    db.close()  # 디비 연결 끊음


