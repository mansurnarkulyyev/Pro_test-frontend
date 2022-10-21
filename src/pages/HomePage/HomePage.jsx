import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addQuestionsKind } from "../../redux/questions/questionsKind/questionsKind-actions";
import classNames from "classnames";

import Button from "../../shared/components/Button";

import styles from "./homePage.module.scss";

const HomePage = () => {
  const dispatch = useDispatch();

  const setQuestionsKind = (name) => {
    dispatch(addQuestionsKind(name));
  };

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
          <Link
            to={"/test"}
            onClick={() => setQuestionsKind("tech")}
            className={styles.firstLink}
          >
            <Button
              type="button"
              text="QA technical training"
              className={classNames("button", "mainBtn", "firstBtn")}
            />
          </Link>
          <Link to={"/test"} onClick={() => setQuestionsKind("theory")}>
            <Button
              type="button"
              text="Testing theory"
              className={classNames("button", "mainBtn", "secondBtn")}
            />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;

{
  /* <Link to={"/test"} onClick={() => setQuestionsKind("tech")} ><button type="button" className={styles.button} >QA technical training</button></Link>
<Link to={"/test"} onClick={() => setQuestionsKind("tech")} ><button type="button" className={styles.button} >Testing theory</button></Link> */
}
