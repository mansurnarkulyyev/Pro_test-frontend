import classNames from "classnames";
import { useNavigate } from "react-router";

import useForm from "../../../shared/hooks/useForm";

import FormField from "../../../shared/components/FormField";
import Button from "../../../shared/components/Button";

import { initialState } from "../../../data/initialStateAuth";

import s from "./signInForm.module.scss";

function SignInForm({ onSubmit }) {
  const navigate = useNavigate();
  const { state, handleChange, handleSubmit } = useForm({
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
        required
      />
      <FormField
        name="password"
        value={password}
        placeholder="Password"
        type="password"
        handleChange={handleChange}
        required
      />
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
    </form>
  );
}
export default SignInForm;
