import React, { useState } from "react";
import { Inner, Inner2, LeftBox, Links, MainMenu, NavbarContainer, NavbarContainer2, SubMenu } from "./NavbarSty";
import Logo from "../../../images/MainLogo.png";
import { MainItems, aa } from "../../containers/Main/Navbar";
import { Link } from "react-router-dom";

const NavbarForm = () => {
  const [selectMenu, setSelectMenu] = useState("투데이");
  const [selectSub, setSelectSub] = useState(1);

  const handleMenuClick = (menu) => {
    setSelectMenu(menu);
  };

  const handleSubClick = (sub) => {
    setSelectSub(sub);
  };
  return (
    <>
      <NavbarContainer>
        <Inner>
          <LeftBox>
            <Link to="/main">
              <img src={Logo} alt="Logo" />
            </Link>
            {MainItems.map((item) => (
              <Links to={item.to}>
                <MainMenu key={item.title} onClick={() => handleMenuClick(item.title)} selected={selectMenu === item.title}>
                  {item.title}
                </MainMenu>
              </Links>
            ))}
          </LeftBox>
          <button>로그아웃</button>
        </Inner>
      </NavbarContainer>
      <NavbarContainer2>
        <Inner2>
          {MainItems.map((item) => (
            <>
              {selectMenu === item.title &&
                item.subitems.map((i) => (
                  <SubMenu key={item.title} onClick={() => handleSubClick(i.idx)} selected={selectSub === i.idx}>
                    {i.name}
                  </SubMenu>
                ))}
            </>
          ))}
        </Inner2>
      </NavbarContainer2>
    </>
  );
};

export default NavbarForm;
