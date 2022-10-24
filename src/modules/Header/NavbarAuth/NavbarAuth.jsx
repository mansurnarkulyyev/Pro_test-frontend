
import s from "./NavbarAuth.module.scss";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutRequest } from "../../../redux/auth/auth-operations";

const NavbarAuth = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.name);
  const token = useSelector((state) => state.auth.token);
  return (
    <>
      {/* <div className={s.NavAuth}>
        <div className={`${s.avatar} ${s.margin - left}`}>{`${userName.charAt(0)}`}</div>
        <div className={s.margin - left}>{`${userName}`}</div>
        <div className={s.log - btn - container}>
          <button className={`${s.btn} ${s.margin - left}`} type="button" onClick={() => dispatch(logoutRequest(token))}>
            <svg width="16px" height="16px">
              <use href="../../../images/icons/sprite.svg#logout"></use>
            </svg>
          </button>
        </div>
      </div> */}
    </>
  );
};

export default NavbarAuth;
