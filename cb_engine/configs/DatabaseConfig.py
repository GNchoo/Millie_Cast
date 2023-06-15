# DB연결 관련한 글로벌 변수

import sys
sys.path.append('d:/IT/book/ai/chatbot-master')

DB_HOST = "127.0.0.1"
DB_USER = "root"
DB_PASSWORD = "1234"
DB_NAME = "chatbot"
DB_PORT = 3307

def DatabaseConfig():
    global DB_HOST, DB_USER, DB_PASSWORD,  DB_NAME, DB_PORT