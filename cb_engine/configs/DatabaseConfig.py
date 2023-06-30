from dotenv import load_dotenv
import os

# .env 파일 로드
load_dotenv()

# DB연결 관련한 글로벌 변수
DB_HOST = os.getenv("DB_HOST")
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_NAME = os.getenv("DB_NAME")
DB_PORT = int(os.getenv("DB_PORT"))

def DatabaseConfig():
    global DB_HOST, DB_USER, DB_PASSWORD,  DB_NAME, DB_PORT