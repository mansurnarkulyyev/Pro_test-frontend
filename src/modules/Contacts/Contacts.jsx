import { useState } from "react";

import ContactForm from "./ContactsForm";
import ContactList from "./ContactsList";

import Modal from "../../shared/components/Modal";
import Spinner from "../../shared/components/Spinner";

import s from "./contacts.module.scss";

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
