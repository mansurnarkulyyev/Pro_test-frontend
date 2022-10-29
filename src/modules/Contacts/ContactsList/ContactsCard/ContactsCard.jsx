import classNames from "classnames";

import Button from "../../../../shared/components/Button";

import s from "./contactsCard.module.scss";
import defaultImg from "../../../../images/default-avatar.png";

function ContactsCard({ name, profession, bio, url, isAdmin }) {


  // const [state, setState] = useState([]);
  // const [fetchContactsList, isLoading, error] = useFetching(async () => {
  //   const response = await getContactsList();
  //   setState(response);
  // })

  // useEffect(() => {
  //   fetchContactsList()
  // }, [])


  // const elements = state.map(({ id, name, position, cover, about }) => <li className={styles.singleCard} key={id} >
  //   <img src={cover} alt={`${name}'s image`} className={styles.image} />
  //   <div className={styles.textContent} >
  //     <h3 className={styles.name} >{name}</h3>
  //     <p className={styles.position} >{position}</p>
  //     <p className={styles.about} >{about}</p>
  //     <button >delete</button>
  //   </div>
  // </li>);

  // return (
  //   <div>
  //     <ul className={styles.contactsList}>{elements}</ul>
  //   </div>
  // );

  return (
    <li className={s.item}>
      {isAdmin && (
        <div className={s[`wrapper-btn`]}>
          <Button
            icon="delete"
            className={classNames("icon", "delete")}
            // onClick={}
          />
          <Button
            icon="edit"
            className={classNames("icon", "edit")}
            // onClick={}
          />
        </div>
      )}
      <div className={s[`wrapper-img`]}>
        <img className={s.img} src={url ? url : defaultImg} />
      </div>
      <div className={s[`wrapper-text`]}>
        <p className={s.name}>{name}</p>
        <p className={s.proff}>{profession}</p>
        <p className={s.bio}>{bio}</p>
      </div>
    </li>
  );
}
export default ContactsCard;
