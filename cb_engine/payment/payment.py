from iamport import Iamport
from dotenv import load_dotenv
import os

load_dotenv()

# 아임포트 객체를 생성합니다.
iamport = Iamport(imp_key=os.getenv("imp_key"), imp_secret=os.getenv("imp_secret"))

# 주문 번호 생성을 위한 변수입니다.
order_number = 6

# 결제 함수를 정의합니다.
def perform_payment(payload):
    global order_number  # 전역 변수 order_number 사용

    try:
        # 주문 번호를 생성합니다.
        merchant_uid = f'{order_number:06}'  # 주문 번호를 6자리 숫자로 표현

        # 결제 정보에 주문 번호를 설정합니다.
        payload['merchant_uid'] = merchant_uid

        # 결제를 수행합니다.
        response = iamport.pay_onetime(**payload)
        if response['status'] == 'paid':
            # 결제 성공 시 주문 번호를 증가시킵니다.
            order_number += 1
            return '결제 성공'
        else:
            return '결제 실패'

    except Iamport.ResponseError as e:
        return ('응답 에러:', e.code, e.message)
    except Iamport.HttpError as e:
        return ('HTTP 에러:', e.code, e.reason)
    except Exception as e:
        return ('기타 에러:', str(e))
    
def cancled_subsribe(merchant_uid, id):
    iamport.cancel('챗봇으로 결제 취소', merchant_uid = merchant_uid)
    return id + "의 구독 결제 취소 했습니다."
