import sys
sys.path.append("D:/Do/Workspace/python/chatbot")
from cb_engine.utils.preprocessing import Preprocessing
from cb_engine.models.ner.nerModel import NerModel

p = Preprocessing(word2index_dic='cb_engine/train_tools/dict/chatbot_dict.bin', userdic='cb_engine/utils/user_dic.tsv')

ner = NerModel(model_name="cb_engine/models/ner/ner_model.h5", proprocess=p)


query = input('입력하고 싶은 문장을 입력 해 주세요. : ')
print(query)
predict = ner.predict(query)
print(predict)
results = ner.search_books(query)
print(results)