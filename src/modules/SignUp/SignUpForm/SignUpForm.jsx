import classNames from "classnames";

import FormField from "../../../shared/components/FormField";
import Button from "../../../shared/components/Button";

import s from "./signUpForm.module.scss";

function SignUpForm({ onSubmit }) {
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
          text="Sign up"
        />
        <Button
          className={classNames("button", "text", "base")}
          type="submit"
          text="Sign in"
        />
      </div>
    </form>
  );
}
export default SignUpForm;
