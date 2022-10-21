import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as actions from "./remoteResults-actions";

const itemsReducer = createReducer([], {
  [actions.fetchResultsSuccess]: (store, { payload }) => {
    const { kind } = payload;
    const requiredIdx = store.findIndex((item) => item.kind === kind);
    if (requiredIdx !== -1) {
      store.splice(requiredIdx, 1, payload);
      return;
    }
    return [...store, payload];
  },
});

const loadingReducer = createReducer(false, {
  [actions.fetchResultsRequest]: () => true,
  [actions.fetchResultsSuccess]: () => false,
  [actions.fetchResultsError]: () => false,
});

const errorReducer = createReducer(null, {
  [actions.fetchResultsRequest]: () => null,
  [actions.fetchResultsError]: (store, { payload }) => payload,
});

const remoteResultsReducer = combineReducers({
  items: itemsReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default remoteResultsReducer;
