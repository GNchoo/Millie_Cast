from configs.DatabaseConfig import *
from utils.Database import Database
from utils.preprocessing import Preprocessing
p = Preprocessing(word2index_dic = 'cb_engine/train_tools/dict/chatbot_dict.bin', userdic='cb_engine/utils/user_dic.tsv')


# 데이터베이스 객체
db = Database(
    host=DB_HOST,
    user=DB_USER,
    password=DB_PASSWORD,
    db_name=DB_NAME,
    port=DB_PORT
)
db.connect() 

query = input("챗봇에 입력할 문장을 입력해주세요 : ")

#의도 파악
from models.intent.intentModel import IntentModel

intent = IntentModel(model_name="cb_engine/models/intent/intent_model.h5", proprocess=p)
predict = intent.predict_class(query)
intent_name = intent.label[predict]

from models.ner.nerModel import NerModel

ner = NerModel(model_name="cb_engine/models/ner/ner_model.h5", proprocess=p)
ner_predict = ner.predict(query)
tag = ner.predict_tags(query)

print('질문 : ', query)
print('의도 : ', intent_name)
print('개체명 : ', ner_predict)
print('ner태그 : ', tag)

# 답변 검색
from utils.FindAnswer import FindAnswer

try:
    f = FindAnswer(db)
    answer_text, answer_image = f.search(intent_name, tag)
    answer = f.tag_to_word(ner_predict, answer_text)
except:
    answer = "죄송해요 무슨 말인지 모르겠어요"

print("답변 : ", answer)

if intent_name == "검색":
    results = ner.search_books(query)
    print(results)


db.close() # 디비 연결 끊음


