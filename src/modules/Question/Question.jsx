import useQuestions from "../../shared/hooks/useQuestions";
import Answer from "./Answer";
import styles from "./question.module.scss";

const Question = ({ item, total, onChange }) => {
  const { state, fill } = useQuestions({
    key: "answers",
    initialState: null,
    mainUnit: item,
    mainUnitProp: "questionId",
  });

  const { question, questionId, answers } = item;
  const elements = answers.map((answer, idx) => {
    return (
      <li className={styles.item} key={idx}>
        <Answer
          meta={{ question, questionId, idx }}
          onLabelClick={fill}
          value={answer}
          checked={idx === state}
          onInputClick={onChange}
          answer={answer}
        />
      </li>
    );
  });
  return (
    <div className={styles.wrapper}>
      <p className={styles.top}>
        Question <span className={styles.accent}>{questionId}</span> / {total}
      </p>
      <p className={styles.header}>{question}</p>
      <ul className={styles.list}>{elements}</ul>
    </div>
  );
};

export default Question;
