import React from "react";
import s from "./allNav.module.scss"
import { useSelector } from "react-redux";
import NavPrivate from "./NavPrivate/NavPrivate";
import NavPublic from "./NavPublic/NavPublic";
import NavbarAuth from "../NavbarAuth/NavbarAuth";

const NavAll = () => {
    const isLogin = useSelector(state => state.auth.isLogin)

    return (
        <>
                <ul className={s.Nav}>
                    {/* {isLogin ? ( */}
                        <NavPrivate />
                    {/* ) */}
                        {/* : (<NavPublic />)} */}
                </ul>
        </>
    );
};

export default NavAll;