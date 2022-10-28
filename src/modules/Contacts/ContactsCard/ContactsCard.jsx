import { useEffect, useState } from "react";
import { getUserInfo } from "../../../shared/api/userInfo";
import { useFetching } from "../../../shared/hooks/useFetching";
import styles from "./contactsCard.module.scss"

const ContactsCard = () => {

  const [state, setState] = useState([]);
  const [fetchUserInfo, isLoading, error] = useFetching(async () => {
    const response = await getUserInfo()
    setState(response);
  })

  useEffect(() => {
    fetchUserInfo()
  }, [])


  const elements = state.map(({ id, name, position, cover, about }) => <li className={styles.singleCard} key={id} >
    <img src={cover} alt={`${name}'s image`} className={styles.image} />
    <div className={styles.textContent} >
      <h3 className={styles.name} >{name}</h3>
      <p className={styles.position} >{position}</p>
      <p className={styles.about} >{about}</p>
      <button >delete</button>
    </div>
  </li>);

  return (
    <div>
      <ul className={styles.contactsList}>{elements}</ul>
    </div>
  );
};


export default ContactsCard;
