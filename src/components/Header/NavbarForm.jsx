import React, { useState } from "react";
import { Inner, Inner2, LeftBox, Links, MainMenu, NavbarBox, NavbarContainer, NavbarContainer2, SubMenu } from "./NavbarSty";
import Logo from "../../images/MainLogo.png";
import { MainItems } from "./Navbar";
import { Link, useNavigate } from "react-router-dom";

const NavbarForm = () => {
  const [selectMenu, setSelectMenu] = useState("투데이");
  const [selectSub, setSelectSub] = useState(1);
  const navigate = useNavigate();

  const handleMenuClick = (menu) => {
    setSelectMenu(menu);
  };

  const handleSubClick = (sub) => {
    setSelectSub(sub);
  };

  const handleLogout = () => {
    localStorage.clear();
    alert("로그아웃 성공");
    navigate("/");
  };
  return (
    <NavbarBox>
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
          <button onClick={handleLogout}>로그아웃</button>
        </Inner>
      </NavbarContainer>
      <NavbarContainer2>
        <Inner>
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
        </Inner>
      </NavbarContainer2>
    </NavbarBox>
  );
};

export default NavbarForm;
