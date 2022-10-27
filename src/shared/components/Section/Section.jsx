import classNames from "classnames";

import s from "./section.module.scss";

function Section({ children, className }) {
  return (
    <section className={classNames(s.section, s[`${className}`])}>
      {children}
    </section>
  );
}
export default Section;
