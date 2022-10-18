import classNames from "classnames";

import useForm from "../../../shared/hooks/useForm";

import FormField from "../../../shared/components/FormField";
import Button from "../../../shared/components/Button";

import s from "./signInForm.module.scss";

function SignInForm({ onSubmit }) {
  return (
    <form className={s.form}>
      <FormField name="email" placeholder="Email" type="email" required />
      <FormField
        name="password"
        placeholder="Password"
        type="password"
        required
      />
      <div className={s[`wrapper-btn`]}>
        <Button
          className={classNames("button", "text", "focus")}
          type="submit"
          text="Sign in"
        />
        <Button
          className={classNames("button", "text", "base")}
          type="submit"
          text="Sign up"
        />
      </div>
    </form>
  );
}
export default SignInForm;
