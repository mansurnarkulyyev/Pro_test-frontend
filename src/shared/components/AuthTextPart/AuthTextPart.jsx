import s from "./authTextPart.module.scss";

function AuthTextPart() {
  return (
    <p className={s.text}>
      <span className={s[`text--bold`]}>[ </span>We will help you find weak
      points in knowledge so that you can strengthen it. We will show you what
      is relevant to know for a{" "}
      <span className={s[`text--bold`]}>QA Engineer</span> and will try to make
      the learning process more diverse_{" "}
      <span className={s[`text--bold`]}>]</span>
    </p>
  );
}

export default AuthTextPart;

