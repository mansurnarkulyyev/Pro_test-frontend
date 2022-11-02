import LocalToastTargetComponent from "./LocalToastTargetComponent";

export const localErrorEmail = (
  <LocalToastTargetComponent
    type="error"
    text="Please type an email like gmail@mail.com"
  />
);
export const localErrorPassword = (
  <LocalToastTargetComponent
    type="error"
    text="Please type a password with a special symbol, a number and an uppercase letter (2,#,Y)"
  />
);
export const localSuccess = (
  <LocalToastTargetComponent type="success" text="Nice job 👍" />
);
