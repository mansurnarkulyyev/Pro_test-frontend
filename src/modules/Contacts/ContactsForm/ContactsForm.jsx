import classNames from "classnames";


import FormField from "../../../shared/components/FormField";
import Button from "../../../shared/components/Button";
import { useState } from "react";
import { addContact } from "../../../shared/api/contacts.js";

function ContactsForm() {
  const [openModal, setOpenModal] = useState(false)

  function closeModal() {
    setOpenModal(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = new FormData(e.target);
    const result = Object.fromEntries(data.entries())
    await addContact(result);

    closeModal(openModal);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField name="cover" type="file" />
      <FormField name="name" placeholder="Name" />
      <FormField name="position" placeholder="Title" />
      <FormField name="about" placeholder="Lorem text" />
      <Button
        // onClick={closeModal(openModal)}
        className={classNames("button", "text", "focus", "top")}
        type="submit"
        text="Submit"
      />
    </form>
  );
}
export default ContactsForm;
