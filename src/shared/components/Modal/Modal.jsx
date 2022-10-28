import classNames from "classnames";
import { createPortal } from "react-dom";
import { useEffect } from "react";

import Button from "../Button";

import PropTypes from "prop-types";
import s from "./modal.module.scss";

const modal = document.getElementById("modal-root");

function Modal({ children, closeModal }) {
  useEffect(() => {
    document.addEventListener("keydown", handleClose);
    return () => document.removeEventListener("keydown", handleClose);
  });

  function handleClose({ target, currentTarget, code }) {
    if (target === currentTarget || code === "Escape") {
      closeModal();
    }
  }
  return createPortal(
    <div className={s.overlay}>
      <div className={s[`modal-content`]}>
        <div className={s[`wrapper-btn`]}>
          <Button
            icon="close"
            className={classNames("icon", "close")}
            onClick={closeModal}
          />
        </div>
        {children}
      </div>
    </div>,
    modal
  );
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
