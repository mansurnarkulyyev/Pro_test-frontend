import classNames from "classnames";

import MaterialsListItem from "./MaterialListItem/MaterialListItem";
import Button from "../../../shared/components/Button";

import s from "./materialsList.module.scss";

function MaterialsList({ items, onDelete, onAdd, resources }) {
  const elements = items.map(({ title, link }, inx) => (
    <MaterialsListItem
      key={title}
      inx={inx + 1}
      title={title}
      link={link}
      onDelete={onDelete}
      resources={resources}
    />
  ));

  return (
    <>
      <ul className={s.list}>{elements}</ul>
      <div className={s.btn}>
        <Button
          icon="add"
          className={classNames("add", "button")}
          onClick={onAdd}
        />
      </div>
    </>
  );
}
export default MaterialsList;
