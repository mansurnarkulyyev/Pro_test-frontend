import sprite from "../../../images/icons/sprite.svg";
import styles from "./spinner.module.scss";

function Spinner() {
  return (
    <svg className={styles.spinner}>
      <use href={sprite + "#spinner"}></use>
    </svg>
  );
}
export default Spinner;
