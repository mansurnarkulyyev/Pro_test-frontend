import { Link } from "react-router-dom";
import classNames from "classnames";

import Button from "../../shared/components/Button";

import sprite from "../../images/icons/sprite.svg";
import styles from "./homePage.module.scss";

const HomePage = () => {
  const arrowIcon = (
    <svg className={styles.arrow}>
      <use href={sprite + "#icon-arrow-right"}></use>
    </svg>
  );

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          <p>“Regression testing. What is it?</p>
          <p>
            If the system compiles, that's good, if it boots, that's great!”
          </p>
        </h2>
        <h3 className={styles.quoteAuthor}>Linus Torvalds</h3>
        <p className={styles.authorDetails}>
          Linux kernel creator, hacker, 1969
        </p>
        <div className={styles.btnWrapper}>
          <Link to={"/test/tech"} className={styles.firstLink}>
            <Button
              type="button"
              text="QA technical training"
              className={classNames("button", "mainBtn", "firstBtn")}
              children={arrowIcon}
            />
          </Link>
          <Link to={"/test/theory"}>
            <Button
              type="button"
              text="Testing theory"
              className={classNames("button", "mainBtn", "secondBtn")}
              children={arrowIcon}
            />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
