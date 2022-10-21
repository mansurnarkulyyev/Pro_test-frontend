import React from "react";
import { useSelector } from "react-redux";
import NavPrivate from "./NavPrivate/NavPrivate";
import NavPublic from "./NavPublic/NavPublic";
// import { getIsAuth } from "../../../redux/auth/auth-selectors"

const NavAll = () => {
    // const isLogin = useSelector(getIsAuth);

    return (
        <>
            <ul>
                   <NavPrivate /> 
                   <NavPublic />
            </ul>
        </>
    );
};

export default NavAll;