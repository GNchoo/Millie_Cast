import React from "react";
import { styled } from "styled-components";
import Phone1 from "../../images/complete/phone.png";
import Pick from "../../images/complete/card_pick2.png";
import Card1 from "../../images/complete/card_holic.png";
import Card2 from "../../images/complete/card_mania.png";
import Card3 from "../../images/complete/card_pick.png";
import Card4 from "../../images/complete/card_hidden.png";
import CompleteImg from "../FirstMain/Complete/CompleteImg";
import { TextBox } from "../../components/Common/TextBoxes";

const CompleteContainer = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  letter-spacing: -1.2px;
`;

const Inner = styled.div`
  width: 1100px;
  height: 780px;
  margin: 0 auto;
  overflow: auto;
`;

const ImgContainer = styled.div`
  width: 99%;
  height: 60;
  .phone {
    width: 36%;
    margin: 0 auto;
    height: 100%;
  }
`;

const Complete = () => {
  return (
    <CompleteContainer>
      <Inner>
        <TextBox>
          <div className="text1">
            <p>당신이 끝까지 읽을 책을</p>
            <p>알려주는 완독지수</p>
          </div>
          <div className="text2">
            <p>350만 회원이 먼저 읽고</p>
            <p>다 읽을 확률과 예상 시간을 알려드려요</p>
          </div>
        </TextBox>
        <ImgContainer>
          <CompleteImg
            src={Card1}
            alt={Card1}
            style={{
              position: "absolute",
              marginLeft: "190px",
              marginTop: "90px",
              width: "130px",
              height: "130px",
              animationDelay: "0.4s",
            }}
          />
          <CompleteImg
            src={Card2}
            alt={Card2}
            style={{
              position: "absolute",
              marginLeft: "120px",
              marginTop: "250px",
              width: "130px",
              height: "130px",
              animationDelay: "0.6s",
            }}
          />
          <CompleteImg
            src={Card3}
            alt={Card3}
            style={{
              position: "absolute",
              marginLeft: "770px",
              marginTop: "90px",
              width: "130px",
              height: "130px",
              animationDelay: "0.8s",
            }}
          />
          <CompleteImg
            src={Card4}
            alt={Card4}
            style={{
              position: "absolute",
              marginLeft: "830px",
              marginTop: "250px",
              width: "130px",
              height: "130px",
              animationDelay: "1.0s",
            }}
          />
          <div className="phone">
            <CompleteImg
              src={Phone1}
              alt={Phone1}
              style={{
                position: "absolute",
                marginLeft: "15px",
                width: "380px",
                height: "450px",
                animationDelay: "0.4s",
              }}
            />
            <CompleteImg
              src={Pick}
              alt={Pick}
              style={{
                position: "absolute",
                marginTop: "235px",
                width: "400px",
                height: "150px",
                animationDelay: "0.8s",
              }}
            />
          </div>
        </ImgContainer>
      </Inner>
    </CompleteContainer>
  );
};

export default Complete;
