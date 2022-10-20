import { nanoid } from "nanoid";
import styles from "./question.module.scss";

const Question = ({ question, total }) => {
  const { question: header, questionId, answers } = question;
  const elements = answers.map((answer, idx) => {
    return (
      <li className={styles.item} key={idx}>
        <label className={styles.label}>
          <input
            className={styles.radio}
            type="radio"
            name="answer"
            value={answer}
          />
          <div className={styles.fake}></div>
          {answer}
        </label>
      </li>
    );
  });
  return (
    <div className={styles.wrapper}>
      <p className={styles.top}>
        Question <span className={styles.accent}>{questionId}</span> / {total}
      </p>
      <p className={styles.header}>{header}</p>
      <ul>{elements}</ul>
    </div>
  );
};

export default Question;
