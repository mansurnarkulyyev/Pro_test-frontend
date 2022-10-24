import React from 'react';
import s from "./navPublic.module.scss"
import { NavLink } from 'react-router-dom';

const NavPublic = () => {
    return (
        <>
            <li className={s.NavElem}>
                <NavLink exact to="/contacts" className={s.menu}>
                    Contacts
                </NavLink>
            </li>
        </>
    );
};

export default NavPublic;