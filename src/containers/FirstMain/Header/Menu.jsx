import React from "react";
import { menuItems } from "./Header";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = ({ toggle }) => {
  const menuContainer = `MenuContainer ${toggle ? "toggle" : ""}`;

  return (
    <div className={menuContainer}>
      <div className="MenuDiv">
        {menuItems.map((item) => (
          <Link className="MenuLink" to={item.to} key={item.text}>
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
