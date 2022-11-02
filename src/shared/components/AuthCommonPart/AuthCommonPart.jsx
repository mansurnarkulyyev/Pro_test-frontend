import classNames from "classnames";
import { HandySvg } from "handy-svg";

import s from "./authCommonPart.module.scss";
import icon from "../../../images/icons/google-icon.svg";

const googleAuthCb = `${process.env.REACT_APP_API_URL}/api/users/google`;

function AuthCommonPart() {
  const google = () => {
    window.open(googleAuthCb, "_self")
  }

  return (
    <>
      <p className={s.subtitle}>
        You can use your Google Account to authorize:
      </p>
      <div className={s["btn-wrapper"]}>
        <button className={s.button} type="button" onClick={google}>
          <HandySvg src={icon} className={s[`icon-google`]} />
          Google
        </button>
      </div>

      <p className={classNames(s.subtitle, s[`subtitle--left`])}>
        Or login to our app using e-mail and password:
      </p>
    </>
  );
}
export default AuthCommonPart;
