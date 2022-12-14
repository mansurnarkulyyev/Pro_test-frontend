import React from "react";
import s from "./allNav.module.scss";
import { useSelector } from "react-redux";
import NavPrivate from "./NavPrivate/NavPrivate";
import NavPublic from "./NavPublic/NavPublic";
// import NavbarAuth from "../NavbarAuth/NavbarAuth";

const NavAll = ({ onClick, isModalOpen }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  const onModalClose = () => {
    if (isModalOpen) {
      onClick()
    }
  }
  return (
    <>
      <ul className={s.Nav} onClick={onModalClose} >{isLogin ? <NavPrivate /> : <NavPublic />}</ul>
    </>
  );
};

export default NavAll;
