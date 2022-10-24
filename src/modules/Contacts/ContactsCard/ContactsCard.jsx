import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./contactsCard.module.scss"

const ContactsCard = ({ name, title, avatarURL, text }) => {
  // const [data, setData] = useState([]);

  // console.log(data);

  // const getUserData = async () => {
  //   const res = await axios.get("/getdata", {
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })

  //   if (res.data.status === 401 || res.data) {
  //     console.log("error");
  //   } else {
  //     setData(res.data.getUser)
  //   }
  // };


  // const deleteUser = async (id) => {
  //   const res = await axios.delete(`/${id}`, {
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })

  //   if (res.data.status === 401 || res.data) {
  //     console.log("error");
  //   } else {
  //     // setData(res.data.getUser)
  //     console.log("User delete");
  //   }
  // };



  // useEffect(() => {
  //   getUserData();
  // }, []);

  return (
    <div>
      {/* {
        data.length > 0 ? data.map((el, i) => {
          return (<>
            <>
              <li className={styles.singleCard} >
                <img src={el.avatarURL} alt={`${name}'s image`} className={styles.image} />
                <div className={styles.textContent} >
                  <h3 className={styles.name} >{el.name}</h3>
                  <p className={styles.position} >{el.title}</p>
                  <p className={styles.about} >{el.text}</p>
                  <button onClick={() => deleteUser(el._id)}>delete</button>
                </div>
              </li>
            </>
          </>)
        }) : ""
      } */}

      <li className={styles.singleCard} >
        <img src={avatarURL} alt={`${name}'s image`} className={styles.image} />
        <div className={styles.textContent} >
          <h3 className={styles.name} >{name}</h3>
          <p className={styles.position} >{title}</p>
          <p className={styles.about} >{text}</p>
          <button >delete</button>
        </div>
      </li>
    </div>
  );
};


export default ContactsCard;