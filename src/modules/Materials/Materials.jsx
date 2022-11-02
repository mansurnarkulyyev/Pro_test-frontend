import { NotificationManager } from "react-notifications";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { materials } from "../../redux/materials/materials-selectors";
import * as operations from "../../redux/materials/materials-operations";

import MaterialsList from "./MaterialsList";
import Spinner from "../../shared/components/Spinner";

function Materials({ articels }) {
  const dispatch = useDispatch();
  const { literature, resources, loading, error } = useSelector(materials);
  const [openModal, setOpenModal] = useState(false);
  let errMessage = "";
  if (error) {
    errMessage = error.data.message;
  }

  useEffect(() => {
    dispatch(operations.fetchLiteratureRequest());
    dispatch(operations.fetchResourcesRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function showModal() {
    setOpenModal(true);
  }
  function closeModal() {
    setOpenModal(false);
  }
  function onAdd(data) {
    articels
      ? dispatch(operations.addLiteratureRequest(data))
      : dispatch(operations.addResourcesRequest(data));
    closeModal();
  }
  function onDelete(data) {
    articels
      ? dispatch(operations.deleteLiteratureRequest(data))
      : dispatch(operations.deleteResourcesRequest(data));
  }

  return (
    <>
      {loading && <Spinner />}
      <MaterialsList
        items={articels ? literature : resources}
        onDelete={onDelete}
        onOpenModal={showModal}
        openModal={openModal}
        onAdd={onAdd}
        closeModal={closeModal}
        resources={articels ? false : true}
      />
      {error && NotificationManager.error(errMessage)}
    </>
  );
}

export default Materials;
