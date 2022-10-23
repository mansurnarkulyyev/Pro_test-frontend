
import classNames from "classnames";
import Button from "../../../shared/components/Button";
import styles from "./contactsCard.module.scss"

const ContactsCard = ({ name, position, image, about }) => {

  return (
    <li className={styles.singleCard} >
      <img src={image} alt={`${name}'s image`} className={styles.image} />

      {/* <Button
        className={classNames("button", "text", "focus", "top")}
        type="submit"
        text="Try again"
      // onClick={goToTest}
      /> */}
      <div className={styles.textContent} >
        <h3 className={styles.name} >{name}</h3>
        <p className={styles.position} >{position}</p>
        <p className={styles.about} >{about}</p>
      </div>
    </li>
  );
};


export default ContactsCard;