import React, { useState } from "react";
import { styled } from "styled-components";
import Menu from "../../components/Home/Header/Menu";
import { Link } from "react-router-dom";

export const menuItems = [
  {
    text: "기업문의",
    to: "/",
  },
  {
    text: "회사소개",
    to: "/",
  },
  {
    text: "계정관리",
    to: "/",
  },
  {
    text: "고객센터",
    to: "/",
  },
];

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9;
  background-color: rgb(255, 255, 255, 0.8);
  border-bottom: 1px solid #c8c8c8;
`;
export const Inner = styled.div`
  height: 60px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;
`;
export const MenuBox = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin-top: 15px;
  margin-left: 30px;
  .material-symbols-outlined {
    color: #333;
  }
`;
export const Button = styled.button`
  margin-top: 15px;
  margin-right: 30px;
  background-color: #333;
  color: white;
  border-radius: 20px;
  width: 80px;
  height: 30px;
  padding: 5px;
  cursor: pointer;
`;

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const ClickToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <HeaderContainer>
        <Inner>
          <MenuBox>
            <span class="material-symbols-outlined" onClick={ClickToggle}>
              menu
            </span>
          </MenuBox>
          <logo></logo>
          <Link to="/login">
            <Button>로그인</Button>
          </Link>
        </Inner>
      </HeaderContainer>
      <Menu toggle={toggle} />
    </>
  );
};

export default Header;
