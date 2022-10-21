import { createReducer } from "@reduxjs/toolkit";
import { addResult, removeResults } from "./localResults-actions";

const localResultsReducer = createReducer([], {
  [addResult]: (store, { payload }) => {
    const { question } = payload;
    const requiredIdx = store.findIndex(
      (result) => result.question === question
    );
    if (requiredIdx !== -1) {
      store.splice(requiredIdx, 1, payload);
      return;
    }
    return [...store, payload];
  },
  [removeResults]: (store) => [],
});

export default localResultsReducer;
