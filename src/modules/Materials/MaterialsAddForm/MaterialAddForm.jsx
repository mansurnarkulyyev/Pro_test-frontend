import classNames from "classnames";

import useForm from "../../../shared/hooks/useForm.js";
import { initialState } from "./initialState";

import FormField from "../../../shared/components/FormField";
import Button from "../../../shared/components/Button";

import s from "./materialAddForm.module.scss";

function MaterialAddForm({ onSubmit }) {
  const { state, handleSubmit, handleChange } = useForm({
    initialState,
    onSubmit,
  });
  const { title, link } = state;
  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="title"
          value={title}
          handleChange={handleChange}
          placeholder="Type product title"
          pattern="[A-Za-zА-Яа-яЁё]"
        />
        <FormField
          type="text"
          name="link"
          value={link}
          handleChange={handleChange}
          placeholder="Type product link"
          pattern="/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/"
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
export default MaterialAddForm;
