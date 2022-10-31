import { memo } from "react";
import ButtonUniversal from "../../shared/components/ButtonUniversal/ButtonUniversal";
import styles from "./testCtrlButtons.module.scss";

const TestCtrlButtons = ({
  children,
  questionId,
  total,
  prevText,
  nextText,
  onClick,
}) => {
  return (
    <div
      className={
        questionId === "1" ? styles.btnWrapperOne : styles.btnWrapperBoth
      }
    >
      {questionId > 1 && (
        <ButtonUniversal
          type="button"
          text={prevText}
          btnStyles={styles.prev}
          onClick={() => onClick("back")}
          svgStyles={styles.left}
          iconName="arrow-left"
          svgWidth={24}
          svgHeight={24}
        />
      )}
      {questionId < total && (
        <ButtonUniversal
          type="button"
          text={nextText}
          btnStyles={styles.next}
          svgStyles={styles.right}
          iconName="arrow-right"
          svgWidth={24}
          svgHeight={24}
          onClick={() => onClick("forward")}
        />
      )}
      {children}
    </div>
  );
};

export default memo(TestCtrlButtons);
