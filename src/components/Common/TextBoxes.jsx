import { keyframes, styled } from "styled-components";
import React from "react";
import useScrollFadeIn from "./useScrollFadeIn";

const fadeIn = keyframes`
  0%{
    opacity: 0;
    transform: translateY(20px);
  }
  100%{
    opacity: 1;
    transform: none;
  }
`;

export const MainTextBox = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  width: 500px;
  height: 230px;
  margin-top: 220px;
  margin-left: 40px;
  .text1 {
    height: 70%;
    font-size: 60px;
    font-weight: 600;
    color: #242424;
    line-height: 70px;
  }
  .text2 {
    height: 30%;
    font-size: 35px;
    color: #555555;
    line-height: 30px;
    p {
      margin-bottom: 8px;
    }
  }
`;

export const TextBox = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  width: max-content;
  height: 280px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  .text1 {
    height: 50%;
    font-size: 50px;
    font-weight: 600;
    color: #242424;
    line-height: 60px;
  }
  .text2 {
    height: 50%;
    font-size: 23px;
    color: #555555;
    line-height: 30px;
  }
`;

// const TextBoxes = () => {
//   const animatedItem = useScrollFadeIn();

//   return <div></div>;
// };

// export default TextBox;
