import classNames from "classnames";
import { HandySvg } from "handy-svg";

import s from "./button.module.scss";

import add from "../../../images/icons/plus.svg";
import close from "../../../images/icons/close.svg";
import edit from "../../../images/icons/edit.svg";
import download from "../../../images/icons/download.svg";

function Button({ type, text, className, disabled, icon, onClick, children }) {
  let svg;
  switch (icon) {
    case "add":
      svg = add;
      break;
    case "delete":
      svg = close;
      break;
    case "close":
      svg = close;
      break;
    case "download":
      svg = download;
      break;
    case "edit":
      svg = edit;
      break;
    default:
      svg = "";
  }
  const classes = className?.split(" ").map((el) => classNames(s[el]));

  return (
    <button
      className={classNames(classes)}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
      {svg && <HandySvg src={svg} className={s[`icon-${icon}`]} />}
      {children}
    </button>
  );
}
export default Button;
