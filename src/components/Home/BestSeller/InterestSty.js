import { styled } from "styled-components";

export const InterestContainer = styled.div`
  width: 100%;
  height: 500px;
  letter-spacing: -1.2px;
`;

export const Category = styled.div`
  height: 50px;
  display: flex;
`;

export const LinkButton = styled.button`
  width: max-content;
  min-width: 60px;
  height: 30px;
  margin-right: 10px;
  border-radius: 20px;
  border: 1px solid #333;
  color: ${(props) => (props.selected ? "white" : "#333")};
  background-color: ${(props) => (props.selected ? "#333" : "white")};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding: 7px;
  cursor: pointer;
`;

export const Books = styled.div`
  display: flex;
`;
