import classNames from "classnames";

import useAuthState from "../../../shared/hooks/useAuthState";

import ContactsCard from "./ContactsCard/ContactsCard";

import Button from "../../../shared/components/Button";

import s from "./contactsList.module.scss";

function ContactsList({ items, showModal, onDelete }) {
  const { isAdmin } = useAuthState();

  const elements = items.map(({ _id, name, position, about, cover }) => (
    <ContactsCard
      key={_id}
      id={_id}
      name={name}
      profession={position}
      bio={about}
      url={cover}
      onDelete={onDelete}
    />
  ));

  return (
    <>
      <div className={s.wrapper}>
        <ul className={s.list}>{elements}</ul>
      </div>
      {isAdmin && (
        <div className={s.btn}>
          <Button
            icon="add"
            className={classNames("add", "button")}
            onClick={showModal}
          />
        </div>
      )}
    </>
  );
}
export default ContactsList;
