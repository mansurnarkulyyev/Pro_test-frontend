import React from 'react';
import s from '../Header/Header.module.css';
import Logo from '../../shared/components/Logo/Logo';
import { useSelector } from 'react-redux';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavAll from './NavAll/NavAll';

function Header() {
    const isLogin = useSelector(state => state.auth.isLogin)
    return (
        <div className={s.navAll}>
            <div className={s.navWrap}>
                <div className={s.navLogo}>
                    <Logo />
                </div>
                <NavAll />
            </div>
            <div>{isLogin && <NavbarAuth />}</div>
        </div>
    );
}

export default Header;
