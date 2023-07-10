import { styled } from "styled-components";

export const Inner = styled.div`
  max-width: 1450px;
  height: 350px;
  margin: auto;
`;

export const Objects = styled.div`
  height: max-content;
  display: flex;
  margin-top: 18px;
  padding: 0 20px 0 20px;
  overflow-x: hidden;
  overflow-y: hidden;
  .box {
    width: 275px;
    display: flex;
    flex-direction: column;
    margin-right: 15px;
    video {
      border-radius: 10px;
    }
    .badge {
      border: 1px solid #6f6f6f;
      border-radius: 10px;
      width: max-content;
      height: 8px;
      color: #6f6f6f;
      font-size: 10px;
      padding: 3px;
      margin: 7px 0 7px;
    }
    .title {
      font-size: 16px;
      font-weight: 800;
      color: #242424;
      margin-bottom: 8px;
    }
    .text {
      font-size: 14px;
      font-weight: 800;
      color: #6f6f6f;
    }
  }
`;
