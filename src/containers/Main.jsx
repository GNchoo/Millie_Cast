import React from "react";
import { styled } from "styled-components";
import MainBg from "../images/white.jpg";
import MainImg from "../components/Main/MainImg";
import Library from "../images/library.png";
import Text from "../images/text_Img.png";

export const MainContainer = styled.div`
  background-image: url(${MainBg});
  background-position: center;
`;

export const Inner = styled.div`
  width: 1100px;
  height: 700px;
  position: relative;
  margin: 0 auto;
`;

export const Title = styled.div`
  position: absolute;
  top: 60px;
  left: 50px;
`;
export const Title2 = styled.div`
  position: absolute;
  top: 180px;
  left: 150px;
`;

const Main = () => {
  return (
    <MainContainer>
      <Inner>
        <Title>
          <MainImg
            src={Text}
            alt={Text}
            style={{
              position: "absolute",
              width: "300px",
              height: "150px",
              animationDelay: "1.4s",
            }}
          ></MainImg>
        </Title>
        <Title2>
          <MainImg
            src={Text}
            alt={Text}
            style={{
              position: "absolute",
              width: "300px",
              height: "150px",
              animationDelay: "1.8s",
            }}
          ></MainImg>
        </Title2>
        <div>
          <MainImg
            src={Library}
            alt={Library}
            style={{
              position: "absolute",
              width: "600px",
              height: "600px",
              bottom: "0",
              right: "80px",
              animationDelay: "0.7s",
            }}
          />
        </div>
      </Inner>
    </MainContainer>
  );
};

export default Main;
