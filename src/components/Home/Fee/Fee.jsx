import React from "react";
import Price from "../../../images/price.png";
import Price2 from "../../../images/price2.png";
import Ticket from "../../../images/ticket.png";
import Won from "../../../images/won.png";
import { Card, FeeBox, FeeCard, FeeContainer, Inner, Text } from "./FeeSty";
import { TextBox } from "../../Common/TextBoxes";

const Fee = () => {
  return (
    <FeeContainer>
      <Inner>
        <TextBox>
          <div className="text1">
            <p>언제든 해지 가능!</p>
            <p>첫 달 무료로 가볍게</p>
          </div>
          <div className="text2">
            <p>상황에 맞게 원하는 요금제를</p>
            <p>자유롭게 선택하세요</p>
          </div>
        </TextBox>
        <FeeBox>
          <FeeCard>
            <Card>
              <div className="inner">
                <div className="title">전자책 정기구독</div>
                <div className="fee">
                  월 <span>9,900</span>
                  <span className="won">원</span>
                </div>
                <div className="fee2">
                  <div>118,800</div>
                  <img src={Price} alt="price" />
                </div>
                <div className="fee">
                  연 <span>99,000</span>
                  <span className="won">원</span>
                </div>
                <div className="text">
                  밀리에서 제공하는 컨텐츠를 무제한으로
                </div>
              </div>
            </Card>
            <Card>
              <div className="inner">
                <div className="title">종이책 정기구독</div>
                <div className="fee">
                  월 <span>15,900</span>
                  <span className="won">원</span>
                </div>
                <div className="fee2">
                  <div>202,800</div>
                  <img src={Price2} alt="price2" />
                </div>
                <div className="fee">
                  연<span> 183,000</span>
                  <span className="won">원</span>
                </div>
                <div className="text">
                  <div>밀리의 모든 콘텐츠를 무제한으로 보고</div>
                  <div> 2달에 1번 종이책+전자책 배송까지</div>
                </div>
              </div>
            </Card>
          </FeeCard>
          <Text>
            <div className="texts">
              <img src={Ticket} alt="ticket" />
              <p>
                무료 체험 기간 동안 해지해도
                <br />
                금액이 청구되지 않아요
              </p>
            </div>
            <div style={{ borderBottom: "3px solid white" }} />
            <div className="texts">
              <img src={Won} alt="won" />
              <p>
                유료 결제되어도 사용 이력이
                <br /> 없으면 즉시 환불해드려요
              </p>
            </div>
          </Text>
        </FeeBox>
      </Inner>
    </FeeContainer>
  );
};

export default Fee;
