import { createPortal } from "react-dom";
import s from "./BurgerModal.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { logoutRequest } from "../../../redux/auth/auth-operations";

import sprite from "../../../images/icons/sprite.svg";

const modalRoot = document.querySelector("#modal-root");
function BurgerModal({ isActive, children }) {
  
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  if (isActive) {
    return createPortal(
      <div className={s.modal}>
        <div className={s.navModal}>
          {children}
        {isLogin ?  <div className={s.logbtncontainer}>
            <button
              className={s.btn}
              type="button"
              onClick={() => dispatch(logoutRequest(token))}
            >
              <svg className={s.svg}>
                <use href={sprite + "#logout"}></use>
              </svg>
            </button>
          </div> : <></> }
        </div>
      </div>,
      modalRoot
    );
  }
  return null;
}

export default BurgerModal;
