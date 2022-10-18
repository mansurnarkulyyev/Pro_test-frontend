import s from "./section.module.scss";

function Section({ children }) {
  return <section className={s.section}>{children}</section>;
}
export default Section;
