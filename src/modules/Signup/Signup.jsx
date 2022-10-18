import classNames from "classnames";

import SignUpForm from "./SignUpForm";

import s from "./signup.module.scss";

function SignUp() {
  const isAuth = false;

  return (
    <div className={s.wrapper}>
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
      <SignUpForm onSubmit="OnSubmit" />
    </div>
  );
}
export default SignUp;
