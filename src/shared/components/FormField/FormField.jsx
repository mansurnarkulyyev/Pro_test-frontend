import PropTypes from "prop-types";
import classNames from "classnames";

import { useMemo } from "react";
import { nanoid } from "@reduxjs/toolkit";

import s from "./formField.module.scss";

function FormField({
  className,
  label,
  name,
  value,
  handleChange,
  handleBlur,
  placeholder,
  required,
  type,
  title,
  checked,
  maxLenght,
  min,
  max,
}) {
  const id = useMemo(() => nanoid(), []);
  const isRadio = type === "radio" ? true : false;
  const labelStyle = isRadio ? s["label-radio"] : s["label-text"];
  const inputStyle = isRadio
    ? s["input-radio"]
    : classNames(s["input-text"], s.input, `${s} ${className}`);

  const textField = (
    <div className={s.wrapper}>
      {label && (
        <label className={labelStyle} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={inputStyle}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        type={type}
        required={required}
        title={title}
        maxLength={maxLenght}
        min={min}
        max={max}
      />
    </div>
  );
  const radioField = (
    <div className={s["radio-wrapper"]}>
      <input
        className={inputStyle}
        id={id}
        type={type}
        checked={checked}
        name={name}
        value={value}
        onChange={handleChange}
      />
      <label className={labelStyle} htmlFor={id}>
        {label}
      </label>
    </div>
  );

  return (
    <>
      {isRadio && radioField}
      {!isRadio && textField}
    </>
  );
}
export default FormField;

FormField.defaultProps = {
  required: false,
  type: "text",
  handleChange: () => {},
};
FormField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  title: PropTypes.string,
  maxLenght: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
};

/* 
const [email, setEmail] = React.useState("");
const [message, setMessage] = React.useState("");
const emailValidation = () => {
  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  if (regEx.test(email)) {
     setMessage("Valid Email");
     } else if (!regEx.test(email`enter code here`) && email !== "") {
          setMessage("Invalid email");
     } else {
         setMessage("");
     }
}
const handleOnChange = (e)=> {
     setEmail(e.target.value);
}
    <input id="email" className="input" type="email" placeholder="email" value={email} onChange={handleOnChange} />
    <button onClick={emailValidation}>Check</button>
    <p className="message">{message}</p> */
