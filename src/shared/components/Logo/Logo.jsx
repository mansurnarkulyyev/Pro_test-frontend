import React from "react";
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <>
            <Link to="/">
                <svg>
                    <use></use>
                </svg>
            </Link>
        </>
    )
}
export default Logo;
