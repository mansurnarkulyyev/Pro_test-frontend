import styles from "../question.module.scss";
const Answer = ({ onLabelClick, value, checked, onInputClick, answer }) => {
  return (
    <label onClick={onLabelClick} className={styles.label}>
      <input
        className={styles.radio}
        type="radio"
        name="answer"
        value={value}
        checked={checked}
        readOnly={true}
        onClick={onInputClick}
      />
      <div className={styles.fake}></div>
      <div className={styles.answer}>{answer}</div>
    </label>
  );
};

export default Answer;
