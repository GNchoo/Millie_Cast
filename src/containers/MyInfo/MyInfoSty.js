import { styled } from "styled-components";

export const TopContainer = styled.div`
  position: fixed;
  top: 65px;
  width: 100%;
  border-bottom: 1px solid #dfdfdf;
  text-align: center;
  padding: 15px 0 11px;
  font-size: 18px;
  font-weight: 800;
  color: #333333;
  letter-spacing: -1px;
  background-color: white;
`;
export const Inner = styled.div`
  max-width: 1450px;
  margin: 0 auto;
  margin-top: 44px;
`;
export const Space = styled.div`
  border-bottom: 1px solid #dfdfdf;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 16px;
    font-weight: 700;
    color: #333333;
    letter-spacing: -1px;
  }
  .material-symbols-outlined {
    font-size: 15px;
    color: #8b8b8b;
  }
`;
