import { useState } from "react";

import ContactForm from "./ContactsForm";
import ContactList from "./ContactsList";

import Modal from "../../shared/components/Modal";
// import Spinner from "../../shared/components/Spinner";

// import s from "./contacts.module.scss";

// import ContactsCard from "./ContactsCard";
// import Button from "../../shared/components/Button";
// import { useNavigate } from "react-router-dom";
// import classNames from "classnames";



// const Contacts = ({ name, position, cover, about }) => {
//   const navigate = useNavigate();
//   const goToRegister = () => {
//     navigate("/team");
//   };

//   return (<>
//     <ContactsCard
//       name={name}
//       position={position}
//       image={cover}
//       about={about}
//     />

//     <Button
//       className={classNames("button", "text", "focus", "top")}
//       type="submit"
//       text="add user"
//       onClick={goToRegister}
//     />
//   </>
//   );
// };


// export default Contacts;

import contactsList from "../../data/contactsList.json";

function Contacts() {
  const [openModal, setOpenModal] = useState(false);

  function showModal() {
    setOpenModal(true);
  }
  function closeModal() {
    setOpenModal(false);
  }
  function onAdd(data) {
    closeModal();
  }

  return (
    <>
      <ContactList items={contactsList} showModal={showModal} />
      {openModal && (
        <Modal closeModal={closeModal}>
          <ContactForm onSubmit={onAdd} />
        </Modal>
      )}
    </>
  );
}
export default Contacts;
