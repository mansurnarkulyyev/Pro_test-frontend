
import styles from "./contactsCard.module.scss"

const ContactsCard = ({ name, position, image, about }) => {

    return (
      <li className={styles.singleCard} >
        <img src={image} alt={`${name}'s image`} />
        <h3>{name}</h3>
        <p>{position}</p>
        <p>{about}</p>
      </li>
    );
  };
  
  
  export default ContactsCard;