import classNames from "classnames";

import s from "./authCommonPart.module.scss";

function AuthCommonPart() {
  return (
    <>
      <p className={s.subtitle}>
        You can use your Google Account to authorize:
      </p>
      <div className={s["btn-wrapper"]}>
        <button className={s.button} type="button">
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
