import classNames from "classnames";
// import { HandySvg } from "handy-svg";

import s from "./button.module.scss";

function Button({ type, text, className, disabled, icon, onClick }) {
  // let svg;
  // switch (icon) {
  //   case "plus":
  //     svg = plus;
  //     break;

  //   case "close":
  //     svg = close;
  //     break;
  //   case "close-menu":
  //     svg = close;
  //     break;

  //   case "arrowBack":
  //     svg = arrowBack;
  //     break;
  //   case "burger":
  //     svg = burger;
  //     break;

  //   default:
  //     svg = "";
  // }
  const classes = className.split(" ").map((el) => classNames(s[el]));

  return (
    <button
      className={classNames(classes)}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
      {/* {svg && <HandySvg src={svg} className={s[`icon-${icon}`]} />} */}
    </button>
  );
}
export default Button;
