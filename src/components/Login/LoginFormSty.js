import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  letter-spacing: -1.2px;
`;

export const ImageDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(https://d3udu241ivsax2.cloudfront.net/v3/images/login/promotion_intro_bg.ac5237a5bed49b864cccee5224a464e4.jpg);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
`;
export const LoginDiv = styled.div`
  flex-basis: 500px;
  max-width: 1000px;
  padding: 80px 40px;
  background-color: white;
`;

export const TextBox = styled.div`
  height: 60px;
  margin-top: 20px;
  margin: 0 auto;
  margin-bottom: 20px;
  .text1 {
    font-weight: bold;
    font-size: 23px;
    color: #242424;
  }
  .text2 {
    font-size: 15px;
    color: #6f6f6f;
    margin-top: 10px;
  }
`;

export const LoginInput = styled.form`
  width: 480px;
  margin-top: 13px;
  margin: 0 auto;
  div {
    margin-left: 3px;
    color: #8b8b8b;
  }
`;

export const InputDiv = styled.div`
  width: 450px;
  font-size: 11px;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  ::placeholder {
    color: #c1c1c1;
  }
  input {
    font-size: 17px;
    border: none;
    outline: none;
    border-radius: 4px;
  }
`;

export const LoginBtn = styled.button`
  width: 476px;
  background-color: #ffeb60;
  opacity: 0.5;
  color: #333;
  border: none;
  border-radius: 4px;
  padding: 17px;
  font-size: 16px;
  margin-top: 7px;
  margin-left: 3px;
  letter-spacing: -1.2px;
  cursor: pointer;
  :hover& {
    opacity: 1;
  }
`;

export const Options = styled.ul`
  padding: 25px;
  display: flex;
  font-size: 15px;
  color: #8b8b8b;
  justify-content: center;

  li::before {
    content: "|";
    padding: 5px;
  }

  li:nth-child(1):before {
    content: none;
  }

  li:nth-child(1) {
    padding-left: 0px;
  }
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: #8b8b8b;
`;

export const OrDiv = styled.div`
  color: #a5a5a5;
  display: flex;
  .line {
    width: 215px;
    border-top: 1px solid #a5a5a5;
    margin-top: 18px;
  }
  .or {
    font-size: 10px;
    padding: 15px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  width: 55%;
  margin: 0 auto;
  justify-content: space-between;
  img {
    width: 40px;
    cursor: pointer;
  }
`;
