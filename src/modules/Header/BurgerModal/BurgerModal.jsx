import { createPortal } from "react-dom";
import s from "./BurgerModal.module.scss";

const modalRoot = document.querySelector("#modal-root");
function BurgerModal({ isActive, children }) {
  if (isActive) {
    return createPortal(
      <div className={s.overlay}>
        <div className={s.modal}>{children}</div>
      </div>,
      modalRoot
    );
  }
  return null;
}

export default BurgerModal;
