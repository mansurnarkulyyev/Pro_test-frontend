import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutRequest } from "../../../redux/auth/auth-operations";

import sprite from "../../../images/icons/sprite.svg";
import s from "./NavbarAuth.module.scss";

const NavbarAuth = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.email);
  const avatar =  JSON.stringify(userName)
  const token = useSelector((state) => state.auth.token);

  const onLogout = () => {
    dispatch(logoutRequest(token))
    return<Navigate to="/signin" />
  }

  return (
    <>
      <div className={s.NavAuth}>
        <div className={s.avatar + " " + s.marginleft}>{avatar.charAt(1).toUpperCase()}</div>
        <div className={s.marginleft}>{userName}</div>
        <div className={s.logbtncontainer + " " + s.marginleft}>
          <button className={s.btn} type="button" onClick={onLogout}>
            <svg className={s.svg}>
              <use href={sprite + "#logout"}></use>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavbarAuth;
