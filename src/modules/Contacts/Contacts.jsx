import ContactsCard from "./ContactsCard";
import styles from "./contacts.module.scss";

const contactsList = [
  {
    _id: 1,
    name: "First Dev",
    position: "Full Stack Developer",
    image: "https://i.pravatar.cc/300",
    about: "Lorem Ipsum has been the standard fish for Latin texts since the early 16th century."
  },
  {
    _id: 2,
    name: "First Dev",
    position: "Full Stack Developer",
    image: "https://i.pravatar.cc/300",
    about: "Lorem Ipsum has been the standard fish for Latin texts since the early 16th century."
  },
  {
    _id: 3,
    name: "First Dev",
    position: "Full Stack Developer",
    image: "https://i.pravatar.cc/300",
    about: "Lorem Ipsum has been the standard fish for Latin texts since the early 16th century."
  },
  {
    _id: 4,
    name: "First Dev",
    position: "Full Stack Developer",
    image: "https://i.pravatar.cc/300",
    about: "Lorem Ipsum has been the standard fish for Latin texts since the early 16th century."
  },
  {
    _id: 5,
    name: "First Dev",
    position: "Full Stack Developer",
    image: "https://i.pravatar.cc/300",
    about: "Lorem Ipsum has been the standard fish for Latin texts since the early 16th century."
  },
  {
    _id: 6,
    name: "First Dev",
    position: "Full Stack Developer",
    image: "https://i.pravatar.cc/300",
    about: "Lorem Ipsum has been the standard fish for Latin texts since the early 16th century."
  },
  {
    _id: 7,
    name: "First Dev",
    position: "Full Stack Developer",
    image: "https://i.pravatar.cc/300",
    about: "Lorem Ipsum has been the standard fish for Latin texts since the early 16th century."
  }
]

const Contacts = () => {

  const elements = contactsList.map(({name, position, image, about}) => 
    <ContactsCard 
    name = {name}
    position = {position}
    image = {image}
    about = {about}
    />
  );

  return (
    <ul className={styles.contactsList}>
      {elements}
    </ul>
  );
  };
  
  
  export default Contacts;