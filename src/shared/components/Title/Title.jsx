import classNames from "classnames";

import s from "./title.module.scss";

function Title({ text, className }) {
  return <h1 className={classNames(s.title, s[className])}>{text}</h1>;
}
export default Title;
