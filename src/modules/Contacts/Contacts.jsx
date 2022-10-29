import { useState, useEffect } from "react";
import { NotificationManager } from "react-notifications";

import {
  getContactsList,
  deleteContactsList,
  addContact,
} from "../../shared/api/contacts";

import ContactForm from "./ContactsForm";
import ContactList from "./ContactsList";

import Modal from "../../shared/components/Modal";
import Spinner from "../../shared/components/Spinner";

function Contacts() {
  const [openModal, setOpenModal] = useState(false);

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const errMessage = error?.data.message;

  useEffect(() => {
    async function fetchContactsList() {
      setLoading(true);
      try {
        const result = await getContactsList();
        setContacts((prev) => {
          return [...prev, ...result];
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchContactsList();
  }, []);

  function showModal() {
    setOpenModal(true);
  }
  function closeModal() {
    setOpenModal(false);
  }
  async function onAdd(data) {
    const res = await addContact(data);
    setContacts([...contacts, res]);
    closeModal();
  }
  async function onDelete(data) {
    await deleteContactsList(data);
    setContacts(contacts.filter((el) => el._id !== data));
  }

  return (
    <>
      {loading && <Spinner />}
      <ContactList items={contacts} showModal={showModal} onDelete={onDelete} />
      {openModal && (
        <Modal closeModal={closeModal}>
          <ContactForm onSubmit={onAdd} />
        </Modal>
      )}
      {error && NotificationManager.error(errMessage)}
    </>
  );
}
export default Contacts;
