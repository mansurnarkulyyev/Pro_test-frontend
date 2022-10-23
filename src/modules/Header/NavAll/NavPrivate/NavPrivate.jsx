import React from "react";
import s from "./NavPrivate.module.scss"
import { NavLink } from "react-router-dom";

const NavPrivate = () => {
    return (
        <>
            <li className={s.NavElem}>
                <NavLink exact to="/" className={s.menu}>
                    Home
                </NavLink>
            </li>
            <li className={s.NavElem}>
                <NavLink exact to="/useful-info" className={s.menu}>
                    Materials
                </NavLink>
            </li>
            <li className={s.NavElem}>
                <NavLink exact to="/contacts" className={s.menu}>
                    Contacts
                </NavLink>
            </li>
        </>
    );
};

export default NavPrivate;