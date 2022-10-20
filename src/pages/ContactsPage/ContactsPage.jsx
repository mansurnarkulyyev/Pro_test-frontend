import Contacts from "../../modules/Contacts";

import styles from "./contactsPage.module.scss"

const ContactsPage = () => {

  return (
    <main className={styles.wrapper} >
      <h2  className={styles.title} >Our team</h2>
      <Contacts />  
    </main>
  );
};


export default ContactsPage;

