import classNames from "classnames";
import { useNavigate } from "react-router";
import { ProgressBar } from "react-loader-spinner";

import useForm from "../../../shared/hooks/useForm";

import FormField from "../../../shared/components/FormField";
import Button from "../../../shared/components/Button";

import { initialState } from "../../../data/initialStateAuth";

import s from "./signInForm.module.scss";

function SignInForm({ onSubmit, loading }) {
  const navigate = useNavigate();
  const {
    state,
    handleChange,
    handleSubmit,
    validateEmail,
    validatePassword,
    errorEmail,
    errorPassword,
  } = useForm({
    onSubmit,
    initialState,
  });
  const { email, password } = state;

  const goToSignUp = () => {
    navigate("/signup");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <FormField
        name="email"
        value={email}
        placeholder="Email"
        type="email"
        handleChange={handleChange}
        handleBlur={validateEmail}
        required
      />
      {errorEmail}
      <FormField
        name="password"
        value={password}
        placeholder="Password"
        type="password"
        handleBlur={validatePassword}
        required
        handleChange={handleChange}
      />
      {errorPassword}
      {(loading && (
        <div className={s[`wrapper-btn`]}>
          <ProgressBar
            height="80"
            width="180"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="#FF6B09"
            barColor="#FF6B09"
          />
        </div>
      )) || (
        <div className={s[`wrapper-btn`]}>
          <Button
            className={classNames("button", "text", "focus", "auth")}
            type="submit"
            text="Sign in"
          />
          <Button
            className={classNames("button", "text", "base", "auth")}
            type="button"
            text="Sign up"
            onClick={goToSignUp}
          />
        </div>
      )}
    </form>
  );
}
export default SignInForm;
