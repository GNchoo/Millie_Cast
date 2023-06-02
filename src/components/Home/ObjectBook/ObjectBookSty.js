import { styled } from "styled-components";

export const AudioBookContainer = styled.div`
  width: 100%;
  height: 900px;
  letter-spacing: -1.2px;
  background-color: #f7f7f7;
`;

export const Inner = styled.div`
  width: 700px;
  height: 900px;
  margin: 0 auto;
  overflow: auto;
`;

export const Button = styled.button`
  display: flex;
  margin: 0 auto;
  width: 220px;
  height: 50px;
  border: none;
  outline: 1px solid #767676;
  border-radius: 30px;
  background-color: transparent;
  margin-top: 30px;
  padding: 13px;
  font-size: 16px;
  color: #767676;
  justify-content: center;
  cursor: pointer;
  transition: 0.4s;
  div {
    margin-top: 3px;
  }
  :hover& {
    background-color: #767676;
    color: #f7f7f7;
  }
`;
