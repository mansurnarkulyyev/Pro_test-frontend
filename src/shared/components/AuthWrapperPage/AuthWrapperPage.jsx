import s from "./authWrapperPage.module.scss";

function AuthWrapperPage({ children }) {
  return <div className={s.wrapper}>{children}</div>;
}
export default AuthWrapperPage;
