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
  pattern,
  title,
  checked,
  maxLenght,
  min,
  max,
  error,
  dirtyInput /* {classNames(s["plus"], "focus")} */,
}) {
  const id = useMemo(() => nanoid(), []);
  const isRadio = type === "radio" ? true : false;
  const labelStyle = isRadio ? s["label-radio"] : s["label-text"];
  const inputStyle = isRadio
    ? s["input-radio"]
    : classNames(s["input-text"], s.input, `${s} ${className}`);
  const notification = (
    <div className={s["invalid__message--wrapper"]}>
      <p>{error}</p>
    </div>
  );
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
        pattern={pattern}
        title={title}
        maxLength={maxLenght}
        min={min}
        max={max}
      />
      {notification}
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
  pattern: PropTypes.string,
  title: PropTypes.string,
  maxLenght: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
};
