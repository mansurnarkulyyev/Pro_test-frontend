import { useState, useEffect, useRef } from "react";
import { NotificationManager } from "react-notifications";

import MaterialsList from "./MaterialsList";
import Spinner from "../../shared/components/Spinner";

import { getList } from "../../shared/api/materials";

function Materials({ articels, links }) {
  const [state, setState] = useState({
    literature: [],
    resources: [],
  });
  const [loading, setLoading] = useState("false");
  const [error, setError] = useState("null");
  // const errMessage = error?.data.message;
  const firstRender = useRef(true);

  useEffect(() => {
    async function fetchProductsList() {
      setLoading(true);
      setError(false);

      try {
        const { data } = await getList();
        const { literature, resources } = data;
        setState((prevState) => ({
          ...prevState,
          literature,
          resources,
        }));
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    // query && fetchProductsList();
    if (!firstRender.current) {
      fetchProductsList();
    } else {
      firstRender.current = false;
    }
    // eslint-disable-next-line no-use-before-define
  }, [literature, resources]);

  function onAdd() {}
  function onDelete() {}

  const { literature, resources } = state;

  return (
    <>
      {loading && <Spinner />}
      {articels && (
        <MaterialsList items={literature} onDelete={onDelete} onAdd={onAdd} />
      )}
      {links && (
        <MaterialsList
          items={resources}
          onDelete={onDelete}
          onAdd={onAdd}
          resources={true}
        />
      )}
      {error && NotificationManager.error(error)}
    </>
  );
}

export default Materials;
