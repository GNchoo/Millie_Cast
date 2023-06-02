import React from "react";
import { keyframes, styled } from "styled-components";

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

export const Img = styled.img`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

const MainImg = ({ src, alt, style }) => {
  return <Img src={src} alt={alt} style={style} />;
};

export default MainImg;
