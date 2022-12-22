import React from 'react'
import s from "./formInput.module.scss";

function FormInput(props) {
    const { label } = props;
    return (
        <div className={s.formInput}>
            <label htmlFor="">{label}</label>
            <input className={s.item} placeholder={props.placeholder} name={props.name}
            />
        </div>
    )
}

export default FormInput;

