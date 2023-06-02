import React, { useState } from "react";
import { LoginContainer, LoginDiv, ImageDiv, LoginInput, LoginBtn, TextBox, InputDiv } from "../../containers/Login/LoginFormSty";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import apiServer from "../../api/api";

const JoinForm = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("아이디: ", id);
    console.log("비밀번호: ", pw);
    console.log("이름: ", name);

    e.preventDefault();
    try {
      const response = await axios.post(
        `${apiServer}/api/signup`,
        {
          id: id,
          pw: pw,
          name: name,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("회원가입 성공");
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      alert("회원가입에 실패했습니다.");
      console.log(error);
    }
  };

  return (
    <LoginContainer>
      <ImageDiv></ImageDiv>
      <LoginDiv>
        <TextBox>
          <div className="text1">휴대폰 가입</div>
          <div className="text2">휴대폰 번호는 아이디로 사용됩니다</div>
        </TextBox>
        <LoginInput onSubmit={handleSubmit}>
          <InputDiv>
            <div>이름</div>
            <input type="text" placeholder="이름 입력" value={name} onChange={(e) => setName(e.target.value)} />
          </InputDiv>
          <InputDiv>
            <div>아이디</div>
            <input type="id" placeholder="아이디 입력" value={id} onChange={(e) => setId(e.target.value)} />
          </InputDiv>
          <InputDiv>
            <div>비밀번호</div>
            <input type="password" placeholder="비밀번호 입력" value={pw} onChange={(e) => setPw(e.target.value)} />
          </InputDiv>
          <LoginBtn type="submit">다음</LoginBtn>
        </LoginInput>
      </LoginDiv>
    </LoginContainer>
  );
};

export default JoinForm;
