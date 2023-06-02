import { styled } from "styled-components";
// import ReviewBg from "../../../images/reviewBg.png";
import ReviewBg2 from "../../../images/reviewBg2.png";

export const ReviewContainer = styled.div`
  width: 100%;
  background-image: url(${ReviewBg2});
  letter-spacing: -1.2px;
`;

export const Inner = styled.div`
  width: 1100px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .img {
    width: 50%;
    position: relative;
    .poster {
      position: absolute;
      bottom: 70px;
    }
    .video {
      position: absolute;
      bottom: 130px;
      left: 45px;
    }
    .playbutton {
      position: absolute;
      bottom: 320px;
      left: 240px;
      cursor: pointer;
    }
  }
`;
