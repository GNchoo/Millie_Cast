import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Inner = styled.div`
  max-width: 1450px;
  margin: 0 auto;
  margin-top: 40px;
`;

export const PhoneUser = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin: 0 20px 5px;
  img {
    width: 25px;
    margin-right: 10px;
  }
  p {
    font-size: 13px;
    color: #6f6f6f;
    font-weight: 700;
  }
`;

export const UserName = styled.div`
  p {
    font-size: 19px;
    font-weight: 800;
    color: #242424;
    line-height: 24px;
    margin: 0 20px 0 20px;
  }
`;
export const Subscription = styled.div`
  border: 1px solid #dfdfdf;
  margin: 0 20px 0 20px;
  padding: 0 15px 15px 15px;
  margin-top: 15px;
  border-radius: 5px;
  .subscribe {
    display: flex;
    justify-content: space-between;
    padding: 15px 0 9px;
    align-items: center;
    .text1 {
      color: #242424;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: -1px;
    }
    button {
      width: 80px;
      height: 25px;
      display: flex;
      background-color: transparent;
      border: 1px solid #333333;
      border-radius: 15px;
      align-items: center;
      p {
        color: #333333;
        font-size: 12px;
        font-weight: 700;
        margin-right: 3px;
      }
      .material-symbols-outlined {
        color: #6f6f6f;
        font-size: 11px;
        font-weight: 700;
      }
    }
  }
  .text2 {
    color: #6f6f6f;
    font-size: 13px;
    font-weight: 800;
    padding: 0 0 8px;
    display: flex;
    .PBox {
      width: 75px;
      border-right: 1px solid #ccc;
      box-sizing: border-box;
      margin-right: 10px;
    }
    span {
    }
  }
`;

export const BtnBox = styled.div`
  margin: 10px 20px 0 20px;
`;

export const FreeBtn = styled.button`
  width: 100%;
  height: 45px;
  background-color: #ffeb60;
  color: #242424;
  border: none;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -2px;
  cursor: pointer;
`;

export const MenuContainer = styled.div`
  margin: 20px 0 15px;
  display: flex;
  flex-direction: column;
`;
export const Menu = styled.div`
  .title {
    padding: 0 20px;
    height: 30px;
    background-color: #f7f7f7;
    color: #8b8b8b;
    font-size: 13px;
    font-weight: 800;
    display: flex;
    align-items: center;
  }
  .name {
    padding: 0 20px;
    height: 45px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dfdfdf;
    justify-content: space-between;
    .material-symbols-outlined {
      font-size: 16px;
      color: #6f6f6f;
    }
    p {
      color: #242424;
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

export const Links = styled(Link)`
  text-decoration: none;
`;
export const LogoutBtn = styled.button`
  width: 100%;
  height: 45px;
  background-color: #a5a5a5;
  color: #f7f7f7;
  border: none;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -2px;
  cursor: pointer;
`;
