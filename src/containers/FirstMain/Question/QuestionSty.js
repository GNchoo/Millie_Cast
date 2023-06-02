import { styled } from "styled-components";

export const QuestionContainer = styled.div`
  width: 100%;
  letter-spacing: -1.2px;
  background-color: #ffed61;
`;

export const Inner = styled.div`
  width: 900px;
  height: max-content;
  min-height: 500px;
  margin: 0 auto;
  overflow: auto;
`;
export const Title = styled.div`
  height: 20%;
  margin-top: 70px;
  margin-bottom: 50px;
  font-size: 47px;
  font-weight: bold;
  text-align: center;
  color: #323232;
`;

export const QuestionBox = styled.div`
  height: max-content;
  margin-bottom: 75px;
`;
export const Questions = styled.div`
  /* height: ${(props) => (props.selected ? "auto" : "20px")}; */
  max-height: ${(props) => (props.selected ? "1000px" : "20px")};
  transition: max-height 1s ease-in-out;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 20px;
  color: #333;
  padding: 1rem;
  overflow: hidden;
  cursor: pointer;
  .text {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 19px;
      font-weight: bold;
      margin-bottom: 19px;
    }
    .material-symbols-outlined {
      font-size: 28px;
    }
  }
  p {
    font-size: 17px;
    line-height: 20px;
  }
`;
