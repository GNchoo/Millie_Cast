import React from "react";
import { styled } from "styled-components";
import MainBg from "../../images/MainBg.png";
import MainImg from "../FirstMain/MainImage/MainImg";
import Millie from "../../images/millie.png";
import { MainTextBox } from "../../components/Common/TextBoxes";

export const MainContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #f7f7f7;
  letter-spacing: -1.2px;
`;

export const Inner = styled.div`
  max-width: 1200px;
  height: 850px;
  position: relative;
  display: block;
  margin: 0 auto;
  overflow: auto;
  background-image: url(${MainBg});
  background-size: 765px;
  background-repeat: no-repeat;
  background-position: 96% 77%;
`;

const MainImage = () => {
  return (
    <MainContainer>
      <Inner>
        <MainTextBox style={{ animationDelay: "0.4s" }}>
          <div className="text1">
            당신의 일상을
            <br />
            1밀리+
          </div>
          <div className="text2">독서와 무제한 친해지리</div>
        </MainTextBox>
        <MainImg
          src={Millie}
          alt={Millie}
          style={{
            width: "160px",
            marginTop: "280px",
            marginLeft: "40px",
            animationDelay: "0.8s",
          }}
        />
      </Inner>
    </MainContainer>
  );
};

export default MainImage;
