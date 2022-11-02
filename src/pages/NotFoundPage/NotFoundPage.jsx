import { Link } from "react-router-dom";
import s from "./notFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <main>
      <div className={s.wrapper}>
        <h2>Page not found</h2>
        <Link to="/">To home page</Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
