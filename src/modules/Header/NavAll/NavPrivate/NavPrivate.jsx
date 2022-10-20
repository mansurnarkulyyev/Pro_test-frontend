import React from "react";
import { NavLink } from "react-router-dom";

const NavPrivate = () => {
    return (
        <>
            <li>
                <NavLink exact to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/useful-info">
                    Materials
                </NavLink>
            </li>
        </>
    );
};

export default NavPrivate;