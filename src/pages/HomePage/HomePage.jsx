import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addQuestionsKind } from "../../redux/questions/questionsKind/questionsKind-actions";

const HomePage = () => {

  const dispatch = useDispatch();

  const setQuestionsKind = (name) => {
    dispatch(addQuestionsKind(name));
  };

  return (
    <main>
      <div className="container">
        <h2>Home Page</h2>
        <Link to="/test" onClick={() => setQuestionsKind("tech")}>
          Go to test page
        </Link>
      </div>
    </main>
  );
};

export default HomePage;

