import { useState, useEffect, useCallback } from "react";

const useQuestions = ({ key, initialState, mainUnit, mainUnitProp }) => {
  const [state, setState] = useState(initialState);

  const recall = useCallback(() => {
    const entity = localStorage.getItem(key);
    if (entity) {
      const arr = JSON.parse(entity);
      const input = arr.find((item) => item.id === mainUnit[mainUnitProp]);
      return input ? input.index : null;
    }
    return entity;
  }, [key, mainUnit, mainUnitProp]);

  const fill = (id, idx) => {
    const arr = JSON.parse(localStorage.getItem(key)) || [];
    const item = arr.find((item) => item.id === id);
    if (item) {
      item.index = idx;
    } else {
      const obj = { id, index: idx };
      arr.push(obj);
    }
    localStorage.setItem(key, JSON.stringify(arr));
    setState(idx);
  };

  useEffect(() => {
    setState(recall(mainUnit));
  }, [mainUnit, recall]);

  return { state, fill };
};

export default useQuestions;
