import React from 'react';
import { NavLink } from 'react-router-dom';

const NavPublic = () => {
    return (
        <>
            <li>
                <NavLink exact to="/contacts">
                    Contacts
                </NavLink>
            </li>
        </>
    );
};

export default NavPublic;