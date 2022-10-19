import { useDispatch } from "react-redux";

import useAuthState from "../../shared/hooks/useAuthState";

import { signinRequest } from "../../redux/auth/auth-operations";

import AuthCommonPart from "../../shared/components/AuthCommonPart";
import SignInForm from "./SignInForm";

import s from "./signIn.module.scss";

function SignIn() {
  const dispatch = useDispatch();
  const auth = useAuthState();

  const { error, loading } = auth;
  const errMessage = error?.data.message;

  const onSingIn = (data) => {
    dispatch(signinRequest(data));
  };

  return (
    <div className={s.wrapper}>
      <AuthCommonPart />
      <SignInForm onSubmit={onSingIn} />
      {loading && <p>Loading...</p>}
      {error && <p>{errMessage}</p>}
    </div>
  );
}
export default SignIn;
