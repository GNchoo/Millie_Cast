import { styled } from "styled-components";

export const BooksContainer = styled.div`
  background-color: white;
  padding: 30px;
  letter-spacing: -1.2px;
`;

export const Inner = styled.div`
  width: 97%;
  height: 1000px;
  margin: 0 auto;
`;

export const ImageBox = styled.div`
  height: 220px;
  display: flex;
  align-items: center;
  overflow: hidden;

  .swiper-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    transition-timing-function: linear;
    .custom-swiper-slide {
      direction: rtl;
    }
  }
  .swiper-slide {
    display: flex;
  }
`;
