import { useState } from "react";

import { LocalToastTarget } from "react-local-toast";
import { HandySvg } from "handy-svg";
import classNames from "classnames";

import s from "./localToastTargetComponent.module.scss";

import errorIcon from "../../../images/icons/error.svg";
import successIcon from "../../../images/icons/success.svg";

function LocalToastTargetComponent({ type, text }) {
  const [toast, setToast] = useState(true);

  const loading = "";

  let icon;
  switch (type) {
    case "error":
      icon = errorIcon;
      break;
    case "success":
      icon = successIcon;
      break;
    case "loading":
      icon = loading;
      break;
    default:
      icon = "";
  }

  function removeToast() {
    setToast(!toast);
  }

  return (
    <>
      {toast && (
        <LocalToastTarget>
          <div
            id="#localToast"
            className={classNames(s[type], s.wrapper)}
            onClick={removeToast}
          >
            <div className={s[`box-icon`]} onClick={removeToast}>
              <HandySvg src={icon} className={s[`icon`]} />
            </div>
            <div className={s[`div-text`]}>
              <p className={s.text}>{text}</p>
            </div>
          </div>
        </LocalToastTarget>
      )}
    </>
  );
}

export default LocalToastTargetComponent;
