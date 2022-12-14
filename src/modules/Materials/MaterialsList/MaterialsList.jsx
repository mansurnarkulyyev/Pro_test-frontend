import classNames from "classnames";

// import useCloseModal from "../../../shared/hooks/useCloseModal";

import MaterialAddForm from "../MaterialsAddForm/MaterialAddForm";
import MaterialsListItem from "./MaterialListItem/MaterialListItem";

import Button from "../../../shared/components/Button";
import Modal from "../../../shared/components/Modal";

import s from "./materialsList.module.scss";

function MaterialsList({
  items,
  onDelete,
  onOpenModal,
  openModal,
  closeModal,
  resources,
  onAdd,
}) {
  const elements = items.map(({ title, link, _id }, inx) => (
    <MaterialsListItem
      key={_id}
      inx={inx + 1}
      title={title}
      link={link}
      onDelete={() => {
        onDelete(_id);
      }}
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
          onClick={onOpenModal}
        />
      </div>

      {openModal && (
        <Modal closeModal={closeModal}>
          <MaterialAddForm onSubmit={onAdd} />
        </Modal>
      )}
    </>
  );
}
export default MaterialsList;
