import classNames from "classnames";

import Button from "../../../../shared/components/Button";

import s from "./materialListItem.module.scss";

function MaterialsListItem({ title, link, inx, onDelete, resources, _id }) {
  const titleS = resources
    ? classNames(s[`title-resources`], s.title)
    : s.title;
  return (
    <li className={s.item}>
      <div>
        {inx}.&nbsp;
        <a href={link} className={titleS}>
          {title}
        </a>
      </div>
      <div className={s[`wrapper-btn`]}>
        <Button
          icon="delete"
          className={classNames("icon", "delete")}
          onClick={() => onDelete(_id)}
        />
      </div>
    </li>
  );
}
export default MaterialsListItem;
