import PropTypes from "prop-types";
import styles from "./answer.module.scss";

const Answer = ({
  meta,
  onLabelClick,
  value,
  checked,
  onInputClick,
  answer,
}) => {
  const { question, questionId, idx } = meta;
  return (
    <label
      onClick={() => onLabelClick(questionId, idx)}
      className={styles.label}
    >
      <input
        className={styles.radio}
        type="radio"
        name="answer"
        value={value}
        checked={checked}
        readOnly={true}
        onClick={() => onInputClick({ question, answer })}
      />
      <div className={styles.fake}></div>
      <div className={styles.answer}>{answer}</div>
    </label>
  );
};

Answer.propTypes = {
  meta: PropTypes.exact({
    question: PropTypes.string.isRequired,
    questionId: PropTypes.string.isRequired,
    idx: PropTypes.number.isRequired,
  }),
  onLabelClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onInputClick: PropTypes.func.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Answer;
