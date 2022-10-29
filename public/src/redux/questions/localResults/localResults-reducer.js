import { createReducer } from "@reduxjs/toolkit";
import { addResult, removeResults } from "./localResults-actions";
import spliceOrAddToStore from "../../../helpers/spliceOrAddToStore";

const localResultsReducer = createReducer([], {
  [addResult]: (store, { payload }) => {
    return spliceOrAddToStore(store, payload, "question");
  },
  [removeResults]: (store) => [],
});

export default localResultsReducer;
