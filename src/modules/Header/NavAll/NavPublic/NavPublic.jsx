import React from 'react';
import s from "./publicNav.module.scss"
import { NavLink } from 'react-router-dom';

const NavPublic = () => {
    function getClassName({ isActive }) {
        const style = isActive ? s.isActive : s.menu;
        return style;
    }
    return (
        <>
            <li className={s.NavElem}>
                <NavLink to="/contacts" className={getClassName}>
                    Contacts
                </NavLink>
            </li>
        </>
    );
};

export default NavPublic;