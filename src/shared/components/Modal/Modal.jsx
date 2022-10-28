import { createPortal } from "react-dom";

import PropTypes from "prop-types";
import s from "./modal.module.scss";

const modal = document.getElementById("modal-root");

function Modal({ children }) {
  return createPortal(<div className={s.overlay}>{children}</div>, modal);
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
