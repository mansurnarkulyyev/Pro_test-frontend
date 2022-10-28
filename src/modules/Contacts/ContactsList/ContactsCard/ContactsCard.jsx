import classNames from "classnames";

import Button from "../../../../shared/components/Button";

import s from "./contactsCard.module.scss";
import defaultImg from "../../../../images/default-avatar.png";

function ContactsCard({ name, profession, bio, url }) {
  return (
    <li className={s.item}>
      <div className={s[`wrapper-btn`]}>
        <Button
          icon="delete"
          className={classNames("icon", "delete")}
          // onClick={}
        />
        <Button
          icon="edit"
          className={classNames("icon", "edit")}
          // onClick={}
        />
      </div>
      <div className={s[`wrapper-img`]}>
        <img className={s.img} src={url ? url : defaultImg} />
      </div>
      <div className={s[`wrapper-text`]}>
        <p className={s.name}>{name}</p>
        <p className={s.proff}>{profession}</p>
        <p className={s.bio}>{bio}</p>
      </div>
    </li>
  );
}
export default ContactsCard;
