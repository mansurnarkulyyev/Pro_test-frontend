import classNames from "classnames";

import useForm from "../../../shared/hooks/useForm.js";
import { initialState } from "./initialState";

import FormField from "../../../shared/components/FormField";
import Button from "../../../shared/components/Button";

import s from "./contactsForm.module.scss";


// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import FormInput from '../../shared/components/FormInput';
// import s from "./contacts.module.scss"

// import Button from '../../shared/components/Button';
// import classNames from 'classnames';
// import { getContactsList } from '../../shared/api/contacts';
// import { useDispatch } from 'react-redux';


// function ContactsForm() {
//   // const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let data = new FormData(e.target);
//     const result = Object.fromEntries(data.entries())
//     console.log(result);
//     getContactsList(result);
//   }

//   const history = useNavigate();

//   const addUserData = async (token) => {
//     history("/contacts")
//   }

//   return (
//     <form className={s.form} onSubmit={handleSubmit}>
//       <input name="cover" type="file" enctype="multipart/form-data" />
//       <FormInput name="name" placeholder="Name" />
//       <FormInput name="position" placeholder="Title" />
//       <FormInput name="about" placeholder="Lorem text" />
//       <Button
//         className={classNames("button", "text", "focus", "top")}
//         type="submit"
//         text="Submit"
//         onClick={addUserData}
//       />
//     </form>
//   )
// }

// export default ContactsForm;





function ContactsForm({ onSubmit }) {
  const { state, handleSubmit, handleChange } = useForm({
    initialState,
    onSubmit,
  });
  const { name, profession, bio } = state;
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
          name="profession"
          value={profession}
          handleChange={handleChange}
          placeholder="Type product profession"
          pattern="[A-Za-zА-Яа-яЁё]"
        />
        <FormField
          type="text"
          name="bio"
          value={bio}
          handleChange={handleChange}
          placeholder="Type product bio"
          pattern="[A-Za-zА-Яа-яЁё]"
        />
        <div className={s[`wrapper-btn-submit`]}>
          <Button
            type="submit"
            className={classNames("button", "focus", "text")}
            text="Add source"
          />
        </div>
      </form>
    </>
  );
}
export default ContactsForm;
