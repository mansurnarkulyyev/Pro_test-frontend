import { useState } from "react";
import PropTypes from "prop-types";
import { NotificationManager } from "react-notifications";

const useForm = ({ onSubmit, initialState }) => {
  const [state, setState] = useState({ ...initialState });

  const validateEmail = ({ target }) => {
    const emailRight = String(target.value)
      .toLowerCase()
      .match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/);
    if (!emailRight) {
      NotificationManager.error("Invalid email");
    } else {
      NotificationManager.success("Valid email");
    }
  };
  const validatePassword = ({ target }) => {
    const passwordRight = String(target.value).toLowerCase();
    // .match(/^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/);
    if (!passwordRight) {
      NotificationManager.error("Bad password");
    } else {
      NotificationManager.success("Good password");
    }
  };

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === "checkbox" ? checked : value;

    setState((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ ...state });
    reset();
  };
  const reset = () => {
    setState({
      ...initialState,
    });
  };

  return {
    state,
    setState,
    handleChange,
    handleSubmit,
    reset,
    validateEmail,
    validatePassword,
  };
};

export default useForm;

useForm.defaultProps = {
  onSubmit: () => {},
  initialState: {},
};
useForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialState: PropTypes.object.isRequired,
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
