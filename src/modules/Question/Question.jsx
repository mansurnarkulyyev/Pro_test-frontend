import { useState, useEffect } from "react";
import styles from "./question.module.scss";

const Question = ({ item, total, onChange }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    setState(null);
  }, [item]);

  const { question, questionId, answers } = item;
  const elements = answers.map((answer, idx) => {
    return (
      <li className={styles.item} key={idx}>
        <label onClick={() => setState(idx)} className={styles.label}>
          <input
            className={styles.radio}
            type="radio"
            name="answer"
            value={answer}
            checked={idx === state}
            readOnly={true}
            onClick={() => onChange({ question, answer })}
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
      <p className={styles.header}>{question}</p>
      <ul>{elements}</ul>
    </div>
  );
};

export default Question;
