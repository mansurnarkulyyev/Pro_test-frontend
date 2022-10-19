const Question = ({ question, total }) => {
  const { question: header, questionId, answers } = question;
  const elements = answers.map((answer, idx) => (
    <li key={idx}>
      <input type="radio" name="answer" value={answer} />
      <p>{answer}</p>
    </li>
  ));
  return (
    <div>
      <p>
        Question {questionId}/{total}
      </p>
      <p>{header}</p>
      <ul>{elements}</ul>
    </div>
  );
};

export default Question;
