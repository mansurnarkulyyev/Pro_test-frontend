import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useBreakpoints from "../../shared/hooks/useBreakpoints";
import getQuestionsKind from "../../redux/questions/questionsKind/questionsKind-selectors";
import { fetchQuestions } from "../../shared/api/questions-api";
import Container from "../../shared/components/Container";
import Question from "../../modules/Question";
import sprite from "../../images/icons/sprite.svg";
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

  const finishTest = () => { };

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

  const { bigger768px } = useBreakpoints();
  const prevText = bigger768px ? "Previous question" : "";
  const nextText = bigger768px ? "Next question" : "";
  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.headerWrapper}>
          <span className={styles.header}>
            [
            {questionsKind === "tech"
              ? "QA technical training"
              : "Testing theory"}
            _ ]
          </span>
          <button className={styles.btn} onClick={finishTest}>
            Finish test
          </button>
        </div>
        {questions.length > 0 && (
          <Question question={currentQuestion} total={totalQuestions} />
        )}
        <div className={styles.btnWrapper}>
          {questionId > 1 && (
            <button className={styles.prev} onClick={decrementId}>
              <svg className={styles.left} width="24" height="24">
                <use href={sprite + "#icon-arrow-left"}></use>
              </svg>
              {prevText}
            </button>
          )}
          {questionId < totalQuestions && (
            <button className={styles.next} onClick={incrementId}>
              {nextText}
              <svg className={styles.right} width="24" height="24">
                <use href={sprite + "#icon-arrow-right"}></use>
              </svg>
            </button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default TestPage;
