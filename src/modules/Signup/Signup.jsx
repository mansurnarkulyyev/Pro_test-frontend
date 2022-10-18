import AuthCommonPart from "../../shared/components/AuthCommonPart";
import SignUpForm from "./SignUpForm";

import s from "./signup.module.scss";

function SignUp() {
  const isAuth = false;

  return (
    <div className={s.wrapper}>
      <AuthCommonPart />
      <SignUpForm onSubmit="OnSubmit" />
    </div>
  );
}
export default SignUp;
