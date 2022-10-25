import ContactsCard from "./ContactsCard";
import styles from "./contacts.module.scss";
import Button from "../../shared/components/Button";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";


const contactsList = [
  {
    _id: 1,
    name: "First Dev",
    position: "Full Stack Developer",
    image: "https://i.ibb.co/brgMdr7/Rectangle-17.jpg",
    about: "Lorem Ipsum has been the standard fish for Latin texts since the early 16th century."
  },
  {
    _id: 2,
    name: "First Dev",
    position: "Full Stack Developer",
    image: "https://i.ibb.co/brgMdr7/Rectangle-17.jpg",
    about: "Lorem Ipsum has been the standard fish for Latin texts since the early 16th century."
  },
  {
    _id: 3,
    name: "First Dev",
    position: "Full Stack Developer",
    image: "https://i.ibb.co/brgMdr7/Rectangle-17.jpg",
    about: "Lorem Ipsum has been the standard fish for Latin texts since the early 16th century."
  },
  {
    _id: 4,
    name: "First Dev",
    position: "Full Stack Developer",
    image: "https://i.ibb.co/brgMdr7/Rectangle-17.jpg",
    about: "Lorem Ipsum has been the standard fish for Latin texts since the early 16th century."
  },
  {
    _id: 5,
    name: "First Dev",
    position: "Full Stack Developer",
    image: "https://i.ibb.co/brgMdr7/Rectangle-17.jpg",
    about: "Lorem Ipsum has been the standard fish for Latin texts since the early 16th century."
  },
  {
    _id: 6,
    name: "First Dev",
    position: "Full Stack Developer",
    image: "https://i.ibb.co/brgMdr7/Rectangle-17.jpg",
    about: "Lorem Ipsum has been the standard fish for Latin texts since the early 16th century."
  },
  {
    _id: 7,
    name: "First Dev",
    position: "Full Stack Developer",
    image: "https://i.ibb.co/brgMdr7/Rectangle-17.jpg",
    about: "Lorem Ipsum has been the standard fish for Latin texts since the early 16th century."
  }
]

const Contacts = () => {



  const navigate = useNavigate();
  const goToRegister = () => {
    navigate("/team");
  };

  const elements = contactsList.map(({ name, title, avatarURL, text }) =>
    <ContactsCard
      name={name}
      position={title}
      image={avatarURL}
      about={text}
    />
  );

  return (<>
    <ul className={styles.contactsList}>
      {elements}
    </ul>

    <Button
      className={classNames("button", "text", "focus", "top")}
      type="submit"
      text="add user"
      onClick={goToRegister}
    />
  </>


  );
};


export default Contacts;