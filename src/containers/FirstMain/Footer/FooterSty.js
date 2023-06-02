import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const FooterContainer = styled.div`
  letter-spacing: -1.2px;
`;

export const Inner = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  height: min-content;
  min-height: 220px;
`;

export const FHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20%;
  font-size: 17px;
  font-weight: bold;
  color: #333;
  margin-left: 15px;
  margin-top: 25px;
  img {
    width: 25px;
    margin-left: 8px;
  }
`;
export const FBody1 = styled.div`
  height: max-content;
  font-size: 10px;
  margin-left: 15px;
  margin-top: 15px;
  color: #a5a5a5;
  cursor: pointer;
  .click {
    display: flex;
    width: max-content;
  }
  span {
    font-size: 12px;
  }
  .open {
    margin-top: 10px;
  }
  .Kim {
    margin-top: 15px;
  }
  p {
    line-height: 13px;
  }
`;
export const FBody2 = styled.div`
  height: 20%;
  font-size: 12px;
  margin-left: 15px;
  margin-top: 25px;
`;

export const Links = styled(Link)`
  text-decoration: none;
  height: 20%;
  margin-right: 15px;
  color: #6f6f6f;
`;
export const FFooter = styled.div`
  height: 15px;
  font-size: 12px;
  margin-left: 15px;
  margin-top: 25px;
  color: #6f6f6f;
  margin-bottom: 100px;
`;
