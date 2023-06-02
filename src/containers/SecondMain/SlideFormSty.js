import { styled } from "styled-components";

export const SlideContainer = styled.div`
  width: 100%;
  height: 280px;
  margin-top: 104px;
  background-color: #ddd;
`;

export const SlideImg = styled.div`
  width: 100%;
  height: 280px;
  margin-top: 32px;
  background-color: #eee;
  position: absolute;
`;

export const Boxes = styled.div`
  width: max-content;
  display: flex;
  margin: 0 auto;
`;

export const ImgBox = styled.div`
  width: 500px;
  height: 310px;
  border-radius: 12px;
  border: 1px solid green;
  overflow: hidden;
  img {
    width: 100%;
    position: 0% 50%;
    margin-top: -100px;
  }
`;

export const TextBox = styled.div`
  width: 300px;
  height: 310px;
  border: 1px solid green;
`;
