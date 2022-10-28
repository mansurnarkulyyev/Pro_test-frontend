import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../../shared/components/FormInput';
import s from "./contacts.module.scss"

import { addUserInfo } from '../../shared/api/userInfo';


function TeamRegister() {

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = new FormData(e.target);
        const result = Object.fromEntries(data.entries())
        // console.log(Object.fromEntries(data.entries()));
        console.log(result);
        // postUserInfo(data);
        addUserInfo(result);
    }

    const history = useNavigate();



    const addUserData = async (token) => {
        // const data = new FormData();


        // try {
        //     // setToken(token);
        //     const res = await instance.post("http://localhost:3004/api/users/info", { data });
        //     console.log(res);
        // } catch (error) {
        //     // setToken("")
        //     console.log(error);
        // }

        // if (res.data.status === 401 || !res.data) {
        //     console.log("error");
        // }

        history("/contacts")

    }
    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <input name="cover" type="file" enctype="multipart/form-data" />
            <FormInput label="Name:" name="name" placeholder="Name" />
            <FormInput label="Title:" name="position" placeholder="Title" />
            <input name="about" placeholder="Lorem text" />
            <button type='submit' onClick={addUserData}>submit</button>
            {/* <Button
      className={classNames("button", "text", "focus", "top")}
      type="submit"
      text="Submit"
      onClick={addUserData}
    /> */}
        </form>
    )
}

export default TeamRegister;


