import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useBreakpoints from "../../shared/hooks/useBreakpoints";
import getQuestionsKind from "../../redux/questions/questionsKind/questionsKind-selectors";
import getLocalResults from "../../redux/questions/localResults/localResults-selectors";
import { setResults } from "../../redux/questions/remoteResults/remoteResults-operations";
import { fetchQuestions, postResults } from "../../shared/api/questions-api";
import countRightsWrongs from "../../helpers/countRightsWrongs";
import {
  addResult,
  removeResults,
} from "../../redux/questions/localResults/localResults-actions";
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
  const questionsKind = useSelector(getQuestionsKind);
  const results = useSelector(getLocalResults);

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

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalQuestions = questions.length;
  const { bigger768px } = useBreakpoints();
  const prevText = bigger768px ? "Previous question" : "";
  const nextText = bigger768px ? "Next question" : "";

  const interruptTest = () => {
    dispatch(removeResults());
    navigate("/");
  };

  const finishTest = async () => {
    const resultsCount = countRightsWrongs(questions, results);
    const reqBody = { kind: questionsKind, results: resultsCount };
    await postResults(reqBody);
    dispatch(setResults(questionsKind));
  };

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

  const setVariant = ({ question, answer }) => {
    dispatch(addResult({ question, answer }));
  };

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
          <button className={styles.btn} onClick={interruptTest}>
            Finish test
          </button>
        </div>
        {questions.length > 0 && (
          <Question
            item={currentQuestion}
            total={totalQuestions}
            onChange={setVariant}
          />
        )}
        <div
          className={
            questionId === 1 ? styles.btnWrapperOne : styles.btnWrapperBoth
          }
        >
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
          {results.length === totalQuestions && (
            <button className={styles.result} onClick={finishTest}>
              See results
            </button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default TestPage;
