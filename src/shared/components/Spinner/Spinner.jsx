import sprite from "../../../images/icons/sprite.svg";
import styles from "./spinner.module.scss";

function Spinner() {
  return (
    <svg className={styles.spinner}>
      <use href={sprite + "#icon-spinner"}></use>
    </svg>
  );
}
export default Spinner;
