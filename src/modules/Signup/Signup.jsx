import AuthCommonPart from "../../shared/components/AuthCommonPart";
import SignUpForm from "./SignUpForm";

import s from "./signUp.module.scss";

function SignUp() {
  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <div className={s.wrapper}>
      <AuthCommonPart />
      <SignUpForm onSubmit={onSubmit} />
    </div>
  );
}
export default SignUp;
