import React, { useState } from "react";
import {
  LoginContainer,
  LoginDiv,
  ImageDiv,
  LoginInput,
  LoginBtn,
  TextBox,
  InputDiv,
} from "../Login/LoginFormSty";
import axios from "axios";

const FindPW = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    console.log("아이디: ", id);
    console.log("비밀번호: ", pw);
    console.log("이름: ", name);

    e.preventDefault();
    try {
      const response = await axios.post("http://192.168.0.66:8087/api/~~~", {
        id: id,
        pw: pw,
        name: name,
      });
      alert("비밀번호 찾기 성공");
      console.log(response.data);
    } catch (error) {
      alert("회원정보를 정확히 입력해주세요.");
      console.log(error);
    }
  };

  return (
    <LoginContainer>
      <ImageDiv></ImageDiv>
      <LoginDiv>
        <TextBox>
          <div className="text1">비밀번호 찾기</div>
          <div className="text2">가입할 때 입력했던 정보를 확인합니다</div>
        </TextBox>
        <LoginInput onSubmit={handleSubmit}>
          <InputDiv>
            <div>이름</div>
            <input
              type="text"
              placeholder="이름 입력"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputDiv>
          <InputDiv>
            <div>아이디</div>
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
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
          </InputDiv>
          <LoginBtn type="submit">다음</LoginBtn>
        </LoginInput>
      </LoginDiv>
    </LoginContainer>
  );
};

export default FindPW;
