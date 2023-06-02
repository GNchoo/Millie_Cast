import React from "react";
import LoginForm from "../../components/Login/LoginForm";

export const OptionItem = [
  { title: "회원가입", to: "/join" },
  { title: "비밀번호 찾기", to: "/find-password" },
  { title: "기업회원 로그인", to: "/b2b" },
];

const LoginPage = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default LoginPage;
