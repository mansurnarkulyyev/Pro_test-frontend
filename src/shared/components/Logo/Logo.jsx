import React from "react";
import s from "./Logo.module.scss";
import { Link } from 'react-router-dom';
import {ReactComponent as LogoIcon} from "../../../images/icons/logo.svg";

function Logo() {
    return (
        <>
            <Link to="/home" className={s.logo}>
                <LogoIcon />
            </Link>
        </>
    )
}
export default Logo;
