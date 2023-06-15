# 액셀 파일 읽어서 db에 insert
import pymysql
import openpyxl

from configs.DatabaseConfig import *

# 모듈화

# 학습데이터 초기화
def all_clear_train_data(db):
    # 기존 데이터 전체 삭제
    # delete : 내용 삭제
    # drop : 테이블 삭제
    
    sql = '''
        delete from chatbot_train_data
    '''
    with db.cursor() as cursor:
        cases = cursor.execute(sql)
    
    # auto_increment 초기화
    sql = '''
        alter table chatbot_train_data AUTO_INCREMENT=1
    '''
    with db.cursor() as cursor:
        cases = cursor.execute(sql)

# 데이터 저장
def insert_data(db, xls_row):
    intent, ner, query, answer, answer_img_url = xls_row
    
    sql = '''
        insert chatbot_train_data(intent, ner, query, answer, answer_image)
        values("%s", "%s", "%s", "%s", "%s")
    ''' %(
        intent.value,
        ner.value,
        query.value,
        answer.value,
        answer_img_url.value
    )
    sql = sql.replace("'None'", "null")
    
    with db.cursor() as cursor:
        cases = cursor.execute(sql)
        db.commit()
        
db = None

train_file = 'cb_engine/train_tools/qna/train_data.xlsx'

try:
    # DB 연결
    db = pymysql.connect(
        host="127.0.0.1",
        user="root",
        passwd="1234",
        port=3307,
        db="chatbot",
        charset="utf8"
    )
    print("성공")

    all_clear_train_data(db)
    wb = openpyxl.load_workbook(train_file)
    sheet = wb['Sheet1']
    for row in sheet.iter_rows(min_row=2):
        insert_data(db,row)
        
    wb.close()

except Exception as e:
    # 실패했을 때
    print("실패")
    
finally:
    # 성공하든 실패하든 수행할 코드
    if db is not None:
        db.close()
