import AuthCommonPart from "../../shared/components/AuthCommonPart";
import SignInForm from "./SignInForm";

import s from "./signin.module.scss";

function SignIn() {
  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <div className={s.wrapper}>
      <AuthCommonPart />
      <SignInForm onSubmit={onSubmit} />
    </div>
  );
}
export default SignIn;
