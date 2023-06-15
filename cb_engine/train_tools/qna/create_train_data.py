import pymysql
from configs.DatabaseConfig import *


db = None

try:
    # DB 연결
    db = pymysql.connect(
        host=DB_HOST,
        user=DB_USER,
        passwd=DB_PASSWORD,
        port=DB_PORT,
        db=DB_NAME,
        charset="utf8"
    )

    # 내일 오전 10시에 탕수육 주문 가능할까요
    # 의도 : 음식 주문
    # 개체명 : 내일(Date), 오전 10시(Time), 탕수육(Food)

    # intent : 의도
    # ner : 개체명
    # query : 질문
    # answer : 답변
    # answer_img : 답변 이미지

    sql = """
      CREATE TABLE IF NOT EXISTS `chatbot_train_data` (
      `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
      `intent` VARCHAR(45) NULL,
      `ner` VARCHAR(1024) NULL,
      `query` TEXT NULL,
      `answer` TEXT NOT NULL,
      `answer_image` VARCHAR(2048) NULL,
      PRIMARY KEY (`id`))
    ENGINE = InnoDB DEFAULT CHARSET=utf8
    """

    with db.cursor(pymysql.cursors.DictCursor) as cursor:
        cursor.execute(sql)


except Exception as e:
    # 실패했을 때
    print("실패")

finally:
    # 성공하든 실패하든 수행할 코드
    if db is not None:
        db.close()
