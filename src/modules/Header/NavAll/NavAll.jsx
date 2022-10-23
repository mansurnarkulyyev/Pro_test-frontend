import React from "react";
import s from "./NavAll.module.scss"
import { useSelector } from "react-redux";
import NavPrivate from "./NavPrivate/NavPrivate";
import NavPublic from "./NavPublic/NavPublic";
import NavbarAuth from "../NavbarAuth/NavbarAuth";

const NavAll = () => {
    const isLogin = useSelector(state => state.auth.isLogin)

    return (
        <>
        <div className={s.NavAll}>
            <ul className={s.Nav}>
                {isLogin ? (
                 <NavPrivate /> 
                 ) 
                 : (<NavPublic />)} 
            </ul>
        </div>
        <NavbarAuth />
        </>
    );
};

export default NavAll;