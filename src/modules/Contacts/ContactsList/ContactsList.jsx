import classNames from "classnames";

import ContactsCard from "./ContactsCard/ContactsCard";

import Button from "../../../shared/components/Button";

import s from "./contactsList.module.scss";

function ContactsList({ items, showModal }) {
  const elements = items.map(({ id, name, profession, bio, url }) => (
    <ContactsCard
      key={id}
      name={name}
      profession={profession}
      bio={bio}
      url={url}
    />
  ));
  return (
    <>
      <div className={s.wrapper}>
        <ul className={s.list}>{elements}</ul>
      </div>
      <div className={s.btn}>
        <Button
          icon="add"
          className={classNames("add", "button")}
          onClick={showModal}
        />
      </div>
    </>
  );
}
export default ContactsList;
