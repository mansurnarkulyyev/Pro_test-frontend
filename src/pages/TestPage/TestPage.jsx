import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import getQuestionsKind from "../../redux/questions/questionsKind/questionsKind-selectors";
import { fetchQuestions } from "../../shared/api/questions-api";
import Question from "../../modules/Question";
import styles from "./testPage.module.scss";

const initialState = {
  loading: false,
  error: null,
  questions: [],
  questionId: 1,
};

const TestPage = () => {
  const [state, setState] = useState(initialState);
  const { questions, questionId, loading, error } = state;
  const totalQuestions = questions.length;

  const questionsKind = useSelector(getQuestionsKind);

  useEffect(() => {
    const getQuestions = async (kind) => {
      setState((prevState) => ({ ...prevState, error: null, loading: true }));
      try {
        const questions = await fetchQuestions(kind);
        setState((prevState) => ({
          ...prevState,
          questions,
          loading: false,
        }));
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          error: error.message,
          loading: false,
        }));
      }
    };
    getQuestions(questionsKind);
  }, [questionsKind]);

  const finishTest = () => {};

  const currentQuestion = questions.find(
    (question) => Number(question.questionId) === questionId
  );

  const decrementId = () =>
    setState((prevState) => ({
      ...prevState,
      questionId: prevState.questionId - 1,
    }));

  const incrementId = () =>
    setState((prevState) => ({
      ...prevState,
      questionId: prevState.questionId + 1,
    }));
  return (
    <>
      <div className={styles.headerWrapper}>
        <span className={styles.header}>
          [
          {questionsKind === "tech"
            ? "QA technical training"
            : "Testing theory"}
          _ ]
        </span>
        <button onClick={finishTest}>Finish test</button>
      </div>
      {questions.length > 0 && (
        <Question question={currentQuestion} total={totalQuestions} />
      )}
      {questionId > 1 && (
        <button onClick={decrementId}>Previous question</button>
      )}
      {questionId < totalQuestions && (
        <button onClick={incrementId}>Next question</button>
      )}
    </>
  );
};

export default TestPage;
