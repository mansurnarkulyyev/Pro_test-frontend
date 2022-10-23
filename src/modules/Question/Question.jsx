import { useState, useEffect } from "react";
import styles from "./question.module.scss";

const Question = ({ item, total, onChange }) => {
  const LS_KEY = "answers";

  const recall = (item) => {
    const { questionId } = item;
    const entity = localStorage.getItem(LS_KEY);
    if (entity) {
      const arr = JSON.parse(entity);
      const input = arr.find((item) => item.id === questionId);
      return input ? input.index : null;
    }
    return entity;
  };

  const [state, setState] = useState(null);

  const fill = (id, idx) => {
    const arr = JSON.parse(localStorage.getItem(LS_KEY)) || [];
    const item = arr.find((item) => item.id === id);
    // if (item) {
    //   item.index = idx;
    //   localStorage.setItem(LS_KEY, JSON.stringify(arr));
    //   setState(idx);
    //   return;
    // }
    // const obj = { id, index: idx };
    // arr.push(obj);
    // localStorage.setItem(LS_KEY, JSON.stringify(arr));
    // setState(idx);
    if (item) {
      item.index = idx;
    } else {
      const obj = { id, index: idx };
      arr.push(obj);
    }
    localStorage.setItem(LS_KEY, JSON.stringify(arr));
    setState(idx);
  };

  useEffect(() => {
    setState(recall(item));
  }, [item]);

  const { question, questionId, answers } = item;
  const elements = answers.map((answer, idx) => {
    return (
      <li className={styles.item} key={idx}>
        <label onClick={() => fill(questionId, idx)} className={styles.label}>
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
