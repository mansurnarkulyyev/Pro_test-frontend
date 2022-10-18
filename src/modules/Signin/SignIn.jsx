import AuthCommonPart from "../../shared/components/AuthCommonPart";
import SignInForm from "./SignInForm";

import s from "./signin.module.scss";

function SignUp() {
  const isAuth = false;

  return (
    <div className={s.wrapper}>
      <AuthCommonPart />
      <SignInForm onSubmit="OnSubmit" />
    </div>
  );
}
export default SignUp;
