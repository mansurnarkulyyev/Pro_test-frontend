import React from "react";
import { Link } from 'react-router-dom'
import logo from '../../../images/icons/logo.svg'

function Logo() {
    return (
        <>
            <Link to="/">
                <svg width='129px' height='28px'>
                    <use href={logo}></use>
                </svg>
            </Link>
        </>
    )
}
export default Logo;
