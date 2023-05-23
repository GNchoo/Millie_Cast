import React, { Component } from "react";
import Header from "../../containers/Header";
import LoginForm from "../../components/Login/LoginForm";

export class Login extends Component {
  render() {
    return (
      <>
        <Header />
        <LoginForm />
      </>
    );
  }
}

export default Login;
