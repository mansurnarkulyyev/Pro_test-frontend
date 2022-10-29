import React from "react";
import Title from "../../shared/components/Title/Title";

import photo from "../../images/icons/010 1.png";

import s from "./diagramRechart.module.scss";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Diagram from "./Diagram/Diagram";
import Button from "../../shared/components/Button";

function DiagramRechart({ rights, wrongs }) {
  const navigate = useNavigate();
  const { kind } = useParams();
  const header = kind === "tech" ? "QA technical training" : "Testing theory";
  const goToTest = () => {
    navigate("/");
  };

  return (
    <div className={s.rechart}>
      <Title className={s.title} text="Results" />

      <span className={s.test_th}>[ {header.toUpperCase()}_ ]</span>
      <div className={s.line}></div>

      <Diagram rights={rights} wrongs={wrongs} />

      <div className={s.result}>
        <p className={s.testText}>
          Correct answers - <strong className={s.testText}>{rights}</strong>
        </p>
        <div className={s.line2}>&#124;</div>
        <p className={s.testText}>
          Total questions - <strong className={s.testText}>{rights + wrongs}</strong>
        </p>
      </div>

      <img className={s.cat} src={photo} alt="01" />

      <Title text="Not bad!" />

      <p className={s.text}>But you still need to learn some materials.</p>

      <Button
        className={classNames("button", "text", "focus", "top")}
        type="submit"
        text="Try again"
        onClick={goToTest}
      />
    </div>
  );
}

export default DiagramRechart;
