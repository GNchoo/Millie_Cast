import { styled } from "styled-components";

export const FeeContainer = styled.div`
  width: 100%;
  background-color: #ffed61;
  letter-spacing: -1.2px;
`;

export const Inner = styled.div`
  width: 1100px;
  height: 780px;
  margin: 0 auto;
  overflow: auto;
`;

export const FeeBox = styled.div`
  width: 1000px;
  height: 320px;
  margin: 0 auto;
  overflow: auto;
  display: flex;
`;

export const FeeCard = styled.div`
  width: 65%;
  height: 99%;
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 48%;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  position: relative;
  .inner {
    width: 80%;
    height: 75%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #333;
  }
  .title {
    height: 40px;
    font-size: 20px;
    font-weight: 800;
  }
  .fee {
    height: 70px;
    font-size: 22px;
    .won {
      font-size: 18px;
    }
    span {
      font-size: 40px;
      font-weight: 600;
    }
  }
  .fee2 {
    width: 75%;
    margin-left: 28px;
    font-size: 20px;
    color: #878787;
    height: 30px;
    display: flex;
    text-decoration: line-through;
  }
  .text {
    color: #878787;
    height: 20%;
    font-size: 13px;
    font-weight: 600;
    div {
      margin-bottom: 5px;
    }
  }
  img {
    height: 28px;
    margin-left: 7px;
  }
`;

export const Text = styled.div`
  width: 35%;
  height: 60%;
  margin-top: 60px;
  color: #333;
  font-weight: 600;
  div {
    margin-bottom: 15px;
    margin-left: 30px;
  }
  .texts {
    display: flex;
    p {
      margin-left: 10px;
      margin-top: 15px;
      line-height: 20px;
    }
  }
  img {
    width: 70px;
  }
`;
