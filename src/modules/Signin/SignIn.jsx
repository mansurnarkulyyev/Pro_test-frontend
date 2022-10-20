import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";

import useAuthState from "../../shared/hooks/useAuthState";

import { signinRequest } from "../../redux/auth/auth-operations";

import AuthCommonPart from "../../shared/components/AuthCommonPart";
import SignInForm from "./SignInForm";

import s from "./signIn.module.scss";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useAuthState();

  const { error, loading } = auth;
  const errMessage = error?.data.message;

  const onSingIn = (data) => {
    dispatch(signinRequest(data));
    if (!error) {
      navigate("/");
    }
  };

  return (
    <div className={s.wrapper}>
      <AuthCommonPart />
      <SignInForm onSubmit={onSingIn} error={errMessage} />
      {loading && <p>Loading...</p>}
      {error && NotificationManager.error(errMessage)}
    </div>
  );
}
export default SignIn;
