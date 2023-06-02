import React from "react";
import { keyframes, styled } from "styled-components";

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const Img = styled.img`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

const CompleteImg = ({ src, alt, style }) => {
  return <Img src={src} alt={alt} style={style} />;
};

export default CompleteImg;
