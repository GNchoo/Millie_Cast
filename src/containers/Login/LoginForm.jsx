import React, { useState } from "react";
import { LoginContainer, LoginDiv, ImageDiv, LoginInput, LoginBtn, TextBox, Options, Links, OrDiv, Buttons, InputDiv } from "./LoginFormSty";
import { OptionItem } from "./LoginPage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import apiServer from "../../api/api";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const ToMain = () => {
    navigate("/main");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiServer}/api/login`, {
        id,
        pw,
      });
      console.log(response.data);
      alert("로그인 성공");
      // localStorage.setItem("id", response.data.id);
      const token = response.data.token;
      localStorage.setItem("accessToken", token);
      navigate("/main");
    } catch (error) {
      alert("아이디나 비밀번호를 다시 확인해주세요.");
      console.log(error);
    }
  };

  return (
    <LoginContainer>
      <ImageDiv></ImageDiv>
      <LoginDiv>
        <TextBox>
          <div className="text1">독서와 무제한 친해지리</div>
          <div className="text2">12만 권 속에서 인생책을 찾아보세요</div>
        </TextBox>
        <LoginInput onSubmit={handleSubmit}>
          <InputDiv>
            <div>아이디</div>
            <input type="id" placeholder="아이디 입력" value={id} onChange={(e) => setId(e.target.value)} />
          </InputDiv>
          <InputDiv>
            <div>비밀번호</div>
            <input type="password" placeholder="비밀번호 입력" value={pw} onChange={(e) => setPw(e.target.value)} />
          </InputDiv>
          <LoginBtn type="submit">로그인</LoginBtn>
        </LoginInput>
        <Options>
          {OptionItem.map((item) => (
            <li key={item.title}>
              <Links to={item.to}>{item.title}</Links>
            </li>
          ))}
        </Options>
        <OrDiv>
          <div className="line"></div>
          <div className="or">또는</div>
          <div className="line"></div>
        </OrDiv>
        <Buttons>
          <img src="https://d3udu241ivsax2.cloudfront.net/v3/images/login/kakao-icon.9c9940291430ca6ad83b9ae1f3cc81a8.svg" alt="카카오로 로그인" />
          <img src="https://d3udu241ivsax2.cloudfront.net/v3/images/login/naver-icon.7128d171ea0b01233bb4b32a2b5ad260.svg" alt="네이버로 로그인" />
          <img src="https://d3udu241ivsax2.cloudfront.net/v3/images/login/facebook-icon.f3e1fcc7af9f4cac5be2179a846417f8.svg" alt="페이스북으로 로그인" />
          <img src="https://d3udu241ivsax2.cloudfront.net/v3/images/login/apple-icon.c88b92e286a1d29bcf581e12ac076d44.svg" alt="Apple로 로그인" />
          <img src="https://d3udu241ivsax2.cloudfront.net/v3/images/login/google-icon.4f89e46a7f4be2551c6b2ab781be474d.svg" alt="Google로 로그인" />
        </Buttons>
        <LoginBtn onClick={ToMain}>메인으로</LoginBtn>
      </LoginDiv>
    </LoginContainer>
  );
};

export default LoginForm;
