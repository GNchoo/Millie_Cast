from utils.preprocessing import Preprocessing
from models.intent.intentModel import IntentModel

p = Preprocessing(word2index_dic = 'cb_engine/train_tools/dict/chatbot_dict.bin', userdic='cb_engine/utils/user_dic.tsv')

intent = IntentModel(model_name="cb_engine/models/intent/intent_model.h5", proprocess=p)
query = input("문장 입력 : ")
predict = intent.predict_class(query)
predict_label = intent.label[predict]

print(query)
print("의도 예측 클래스 : ", predict)
print("의도 예측 레이블 : ", predict_label)


