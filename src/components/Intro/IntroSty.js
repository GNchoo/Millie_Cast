import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const IntroContainer = styled.div`
  height: 100vh;
  background-image: url("https://d3udu241ivsax2.cloudfront.net/v3/images/login/promotion_intro_bg.ac5237a5bed49b864cccee5224a464e4.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img {
    width: 100px;
    margin-top: 12%; //100px
  }
  button {
    border: none;
    background-color: #ffeb60;
    color: #242424;
    width: 230px;
    height: 45px;
    border-radius: 30px;
    cursor: pointer;
    margin-bottom: 18px;
    letter-spacing: -1.2px;
    font-size: 16px;
  }
  span {
    color: white;
    opacity: 0.7;
    font-size: 16px;
    font-weight: 700;
  }
`;

export const ToLogin = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: 800;
  margin-left: 3px;
`;

export const Texts = styled.div`
  display: flex;
  justify-content: center;
  letter-spacing: -1.4px;
`;

export const BtnTexts = styled.div`
  margin-bottom: 11%; //100px
`;
