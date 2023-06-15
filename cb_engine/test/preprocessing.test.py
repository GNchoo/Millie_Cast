from utils.preprocessing import Preprocessing

p = Preprocessing(
    userdic = 'cb_engine/utils/user_dic.tsv'
)

pos = p.pos(sentence = '내일 오전 10시에 탕수육 주문할게요')

keyword = p.get_keyword(pos, without_tags = True)
print(keyword)

keyword = p.get_keyword(pos, without_tags = False)
print(keyword)