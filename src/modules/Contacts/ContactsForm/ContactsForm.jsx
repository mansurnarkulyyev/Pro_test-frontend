import classNames from "classnames";


import FormField from "../../../shared/components/FormField";
import Button from "../../../shared/components/Button";

import { addContact } from "../../../shared/api/contacts.js";

function ContactsForm({ onSubmit }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = new FormData(e.target);
    const result = Object.fromEntries(data.entries())
    const result1 = await addContact(result);

    console.log(result1);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField name="cover" type="file" />
      <FormField name="name" placeholder="Name" />
      <FormField name="position" placeholder="Title" />
      <FormField name="about" placeholder="Lorem text" />
      <Button
        className={classNames("button", "text", "focus", "top")}
        type="submit"
        text="Submit"
      />
    </form>
  );
}
export default ContactsForm;
