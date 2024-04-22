import React from "react";
import { Header as HeaderAnt } from "antd/es/layout/layout";
import "./header.scss";
import { NavLink } from "react-router-dom";
import { headerNav } from "./navigation";

const Header = () => {
  return (
    <HeaderAnt
      style={{
        position: "stiky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <nav className='navigation'>
        <ul className='headreNavList'>
          {headerNav.map(({ to, name, id }) => (
            <li key={id} className='headerNavItem'>
              <NavLink to={to}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </HeaderAnt>
  );
};

export default Header;
