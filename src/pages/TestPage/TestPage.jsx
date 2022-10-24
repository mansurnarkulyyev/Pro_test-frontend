import { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useBreakpoints from "../../shared/hooks/useBreakpoints";
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
};

const TestPage = () => {
  const [state, setState] = useState(initialState);
  const [searchParams, setSearchParams] = useSearchParams();

  const { questions, loading, error } = state;
  const { kind } = useParams();
  const questionId = searchParams.get("questionId");
  const results = useSelector(getLocalResults);

  useEffect(() => {
    const getQuestions = async (kind) => {
      const id = questionId || "1";
      setSearchParams({ questionId: id });
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
    getQuestions(kind);
  }, [kind, questionId, setSearchParams]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalQuestions = questions.length;
  const { bigger768px } = useBreakpoints();
  const prevText = bigger768px ? "Previous question" : "";
  const nextText = bigger768px ? "Next question" : "";

  const interruptTest = () => {
    dispatch(removeResults());
    localStorage.removeItem("answers");
    navigate("/");
  };

  const finishTest = async () => {
    const resultsCount = countRightsWrongs(questions, results);
    const reqBody = { kind, results: resultsCount };
    await postResults(reqBody);
    localStorage.removeItem("answers");
    dispatch(setResults(kind));
    navigate(`/diagram/${kind}`);
  };

  const currentQuestion = questions.find(
    (question) => question.questionId === questionId
  );

  const decrementId = () => {
    const newId = Number(questionId) - 1;
    setSearchParams({ questionId: newId });
  };

  const incrementId = () => {
    const newId = Number(questionId) + 1;
    setSearchParams({ questionId: newId });
  };

  const setVariant = ({ question, answer }) => {
    dispatch(addResult({ question, answer }));
  };

  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.headerWrapper}>
          <span className={styles.header}>
            [{kind === "tech" ? "QA technical training" : "Testing theory"}_ ]
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
            questionId === "1" ? styles.btnWrapperOne : styles.btnWrapperBoth
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
          {results.length === totalQuestions &&
            Number(questionId) === totalQuestions && (
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
