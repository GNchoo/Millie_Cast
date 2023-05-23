import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [id, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 DB에 연결하는 로직을 작성합니다.
    // id와 password 변수를 사용하여 DB와 통신하고 인증 로직을 수행할 수 있습니다.
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="id" placeholder="아이디" value={id} onChange={handleIdChange} />
        <input type="password" placeholder="패스워드" value={password} onChange={handlePasswordChange} />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default LoginForm;
