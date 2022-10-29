import classNames from "classnames";

import useForm from "../../../shared/hooks/useForm.js";
import { initialState } from "./initialState";

import FormField from "../../../shared/components/FormField";
import Button from "../../../shared/components/Button";

import s from "./contactsForm.module.scss";

function ContactsForm({ onSubmit }) {
  const { state, handleSubmit, handleChange } = useForm({
    initialState,
    onSubmit,
  });
  const { name, position, about, cover } = state;
  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="name"
          value={name}
          handleChange={handleChange}
          placeholder="Type product name"
          pattern="[A-Za-zА-Яа-яЁё]"
        />
        <FormField
          type="text"
          name="position"
          value={position}
          handleChange={handleChange}
          placeholder="Type product profession"
          pattern="[A-Za-zА-Яа-яЁё]"
        />
        <FormField
          type="text"
          name="about"
          value={about}
          handleChange={handleChange}
          placeholder="Type product bio"
          pattern="[A-Za-zА-Яа-яЁё]"
        />
        <FormField
          type="file"
          name="cover"
          value={cover}
          handleChange={handleChange}
        />
        <div className={s[`wrapper-btn-submit`]}>
          <Button
            type="submit"
            className={classNames("button", "focus", "text")}
            text="Add body"
          />
        </div>
      </form>
    </>
  );
}
export default ContactsForm;
