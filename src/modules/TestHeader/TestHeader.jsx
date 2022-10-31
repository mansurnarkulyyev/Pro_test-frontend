import { memo } from "react";
import ButtonUniversal from "../../shared/components/ButtonUniversal/ButtonUniversal";
import styles from "./testHeader.module.scss";

const TestHeader = ({ kind, buttonText, onClick }) => {
  return (
    <div className={styles.headerWrapper}>
      <span className={styles.header}>
        [{kind === "tech" ? "QA technical training" : "Testing theory"}_ ]
      </span>
      <ButtonUniversal
        type="button"
        text={buttonText}
        btnStyles={styles.btn}
        onClick={onClick}
      />
    </div>
  );
};

export default memo(TestHeader);
