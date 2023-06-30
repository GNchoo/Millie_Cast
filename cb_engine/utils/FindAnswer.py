import datetime

class FindAnswer:
    def __init__(self, db):
        self.db = db

    # 검색 쿼리 생성
    def _make_query(self, intent_name, ner_tags):
        sql = "select * from chatbot_train_data"
        if intent_name != None and ner_tags == None:
            sql = sql + " where intent='{}' ".format(intent_name)

        elif intent_name != None and ner_tags != None:
            where = ' where intent="%s" ' % intent_name
            if (len(ner_tags) > 0):
                where += 'and ('
                for ne in ner_tags:
                    where += " ner like '%{}%' or ".format(ne)
                where = where[:-3] + ')'
            sql = sql + where

        # 동일한 답변이 2개 이상인 경우, 랜덤으로 선택
        sql = sql + " order by rand() limit 1"
        return sql

    # 검색 쿼리 생성
    def _subscribe_query(self, id):
        current_time = datetime.datetime.now()
        sql = f"SELECT *, TIMESTAMPDIFF(DAY, '{current_time}', end_date) AS remaining_days FROM subscribe WHERE member_idx = (SELECT idx FROM member WHERE id = '{id}')"
        return sql

    # 답변 검색
    def search(self, intent_name, ner_tags):
        try:
            # 의도명, 개체명으로 답변 검색
            sql = self._make_query(intent_name, ner_tags)
            answer = self.db.select_one(sql)

            # 검색되는 답변이 없으면 의도명만 검색
            if answer is None:
                sql = self._make_query(intent_name, None)
                answer = self.db.select_one(sql)

            return answer['answer']

        except Exception as e:
            print("에러 발생:", str(e))
            return ("죄송해요, 무슨 말인지 모르겠어요", None)
        
    def searchToSubscribe(self, id):
        try:
            sql = self._subscribe_query(id)
            result = self.db.select_all(sql)
            
            if result:
                remaining_days = result[0]["remaining_days"]
                return f"구독이 {remaining_days}일 남았습니다."
            else:
                return "구독 정보가 없습니다."

        except Exception as e:
            print("에러 발생:", str(e))
            return "로그인된 회원이 아닙니다."
        
    def cancel_subscription(self, id):
        try:
            select_sql = self._subscribe_query(id)
            delete_sql = f"DELETE FROM subscribe WHERE member_idx IN (SELECT idx FROM member WHERE id = '{id}')"
            self.db.execute(delete_sql)
            return f"{id}의 구독이 취소되었습니다."
        except Exception as e:
            print("구독 취소 중 에러 발생:", str(e))
            return "구독 정보가 없습니다."


    # NER 태그를 실제 입력된 단어로 변환
    def tag_to_word(self, ner_predicts, answer):
        try:
            if self.db is None:
                raise Exception("데이터베이스 연결 오류")
        
            for word, tag in ner_predicts:

                # 변환해야하는 태그가 있는 경우 추가
                if tag == 'B_BOOK':
                    answer = answer.replace(tag, word)

            answer = answer.replace('{', '')
            answer = answer.replace('}', '')
            return answer
        
        except Exception as e:
            print("에러 발생:", str(e))
            return answer