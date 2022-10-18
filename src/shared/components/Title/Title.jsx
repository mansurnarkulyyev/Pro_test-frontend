import s from "./title.module.scss";

function Title({ text }) {
  return <h1 className={s.title}>{text}</h1>;
}
export default Title;
