import React, { useState } from "react";
import {
  LoginContainer,
  LoginDiv,
  LoginInput,
  InputDiv,
} from "../../containers/Login/LoginFormSty";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ImageDiv, LinkTo, LoginBtn, TextBox, Texts, WhaleBtn } from "./B2BSty";
import WhaleIcon from "../../images/whale.svg";

const B2BForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://192.168.0.66:8087/api/~~~", {
  //       id,
  //       password,
  //     });
  //     console.log(response.data);
  //     alert("로그인 성공");
  //     navigate("/");
  //     localStorage.setItem("id", response.data.username);
  //   } catch (error) {
  //     alert("아이디나 비밀번호를 다시 확인해주세요.");
  //     console.log(error);
  //   }
  // };

  return (
    <LoginContainer>
      <ImageDiv></ImageDiv>
      <LoginDiv>
        <TextBox>
          <div>
            밀리의 서재
            <br />
            기업회원 로그인
          </div>
        </TextBox>
        <LoginInput
        // onSubmit={handleSubmit}
        >
          <InputDiv>
            <div>기업회원 아이디</div>
            <input
              type="id"
              placeholder="아이디 입력"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </InputDiv>
          <InputDiv>
            <div>비밀번호</div>
            <input
              type="password"
              placeholder="비밀번호 입력"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputDiv>
          <LoginBtn type="submit">로그인</LoginBtn>
          <Texts>
            <div>
              <p>· &nbsp; 기업회원 전용 서비스가 궁금하다면?</p>
              <LinkTo to="https://www.millie.co.kr/h4/b2b/">
                <p className="link">기업 제휴 문의</p>
              </LinkTo>
            </div>
            <p>
              &nbsp;· &nbsp; 비밀번호를 분실시, 회사 내 운영 담당자에게
              문의하세요.
            </p>
          </Texts>
        </LoginInput>
      </LoginDiv>
    </LoginContainer>
  );
};

export default B2BForm;
