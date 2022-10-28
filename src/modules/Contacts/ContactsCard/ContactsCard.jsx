import { useEffect, useState } from "react";
import { getUserInfo } from "../../../shared/api/userInfo";
import styles from "./contactsCard.module.scss"

const ContactsCard = () => {

  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      setState(prevState => ({
        ...prevState,
        loading: true,
      }));

      try {
        const data = await getUserInfo();
        setState(prevState => ({
          ...prevState,
          items: [...data],
          loading: false,
        }))
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          loading: false,
          error,
        }))
      }
    };

    fetchPosts();
  }, []);

  const { items, loading, error } = state;
  console.log(items);

  const elements = items.map(({ id, name, position, cover, about }) => <li className={styles.singleCard} key={id} >
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
      <ul>{elements}</ul>
    </div>
  );
};


export default ContactsCard;
