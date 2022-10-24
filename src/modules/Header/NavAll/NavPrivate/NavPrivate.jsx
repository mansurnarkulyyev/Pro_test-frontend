import React from "react";
import s from "./privateNav.module.scss";
import { NavLink } from "react-router-dom";

const NavPrivate = () => {
  function getClassName({ isActive }) {
    const style = isActive ? s.isActive : s.menu;
    return style;
  }

  return (
    <>
      <li className={s.NavElem}>
        <NavLink exact to="/" className={getClassName}>
          Home
        </NavLink>
      </li>
      <li className={s.NavElem}>
        <NavLink exact to="/useful-info" className={getClassName}>
          Materials
        </NavLink>
      </li>
      <li className={s.NavElem}>
        <NavLink exact to="/contacts" className={getClassName}>
          Contacts
        </NavLink>
      </li>
    </>
  );
};

export default NavPrivate;
