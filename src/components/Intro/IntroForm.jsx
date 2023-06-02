import React from "react";
import { BtnTexts, IntroContainer, Texts, ToLogin } from "./IntroSty";
import IntroLogo from "../../images/introMillie.svg";
import { useNavigate } from "react-router-dom";

const IntroForm = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/join");
  };
  return (
    <IntroContainer>
      <img src={IntroLogo} alt="logo" />
      <BtnTexts>
        <button onClick={handleClick}>첫 달 무료로 시작하기</button>
        <Texts>
          <span>이미 밀리 회원이라면? </span>
          <ToLogin to="/login">로그인</ToLogin>
        </Texts>
      </BtnTexts>
    </IntroContainer>
  );
};

export default IntroForm;
