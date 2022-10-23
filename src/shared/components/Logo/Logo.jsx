import React from "react";
import s from "./Logo.module.scss"
import { Link } from 'react-router-dom'
import logo from '../../../images/icons/logo.svg'

function Logo() {
    return (
        <>
            <Link to="/" className={s.logo}>
                <svg width='129px' height='28px'>
                    <use href={logo}></use>
                </svg>
            </Link>
        </>
    )
}
export default Logo;
