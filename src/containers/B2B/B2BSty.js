import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const ImageDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(https://d3udu241ivsax2.cloudfront.net/v3/images/b2b/bg-b2b.e757acb15601a1b48f2ad0bce049d352.jpg);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
`;

export const TextBox = styled.div`
  font-size: 23px;
  font-weight: 800;
  color: #555555;
  line-height: 32px;
  padding: 5px;
  margin-bottom: 18px;
`;

export const LoginBtn = styled.button`
  width: 476px;
  background-color: #333333;
  opacity: 0.4;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 17px;
  font-size: 16px;
  margin-top: 7px;
  margin-left: 3px;
  letter-spacing: -1.2px;
  :hover& {
    opacity: 1;
  }
`;

export const Texts = styled.div`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
  div {
    display: flex;
    p {
      margin-right: 5px;
    }
    .link {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
  color: #8b8b8b;
`;

export const WhaleBtn = styled.button`
  width: 476px;
  display: flex;
  background-color: #223991;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 16px;
  font-size: 15px;
  margin-top: 7px;
  margin-left: 3px;
  letter-spacing: -1.2px;
  cursor: pointer;
  img {
    margin-right: 130px;
  }
`;
