import classNames from "classnames";
import { useNavigate } from "react-router";

import useForm from "../../../shared/hooks/useForm";

import FormField from "../../../shared/components/FormField";
import Button from "../../../shared/components/Button";

import { initialState } from "../../../data/initialStateAuth.js";

import s from "./signUpForm.module.scss";

function SignUpForm({ onSubmit }) {
  const navigate = useNavigate();
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });
  const { email, password } = state;
  const goToSignIn = () => {
    navigate("/signin");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <FormField
        name="email"
        value={email}
        placeholder="Email"
        type="email"
        required
        handleChange={handleChange}
      />
      <FormField
        name="password"
        value={password}
        placeholder="Password"
        type="password"
        required
        handleChange={handleChange}
      />
      <div className={s[`wrapper-btn`]}>
        <Button
          className={classNames("button", "text", "focus", "auth")}
          type="submit"
          text="Sign up"
        />
        <Button
          className={classNames("button", "text", "base", "auth")}
          type="button"
          text="Sign in"
          onClick={goToSignIn}
        />
      </div>
    </form>
  );
}
export default SignUpForm;
