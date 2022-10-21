import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutRequest } from "../../../redux/auth/auth-operations";

const NavbarAuth = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.name);
  const token = useSelector(state => state.auth.token);
  return (
    <>
      <div>
        <div>{`${userName}`}</div>
        <button type="button" onClick={() => dispatch(logoutRequest(token))}>
          <svg width="16px" height="16px">
            <use href="../../../images/icons/sprite.svg#logout"></use>
          </svg>
        </button>
      </div>
    </>
  );
};

export default NavbarAuth;
