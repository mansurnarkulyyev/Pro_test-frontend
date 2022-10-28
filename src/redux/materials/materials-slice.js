import { createSlice } from "@reduxjs/toolkit";
import * as operations from "../materials/materials-operations";

import { pending, rejected } from "../../shared/utils/utils";

const initialState = {
  literature: [],
  resources: [],

  loading: false,
  error: null,
};
const materialsSlice = createSlice({
  name: "materials",
  initialState,
  extraReducers: {
    [operations.fetchLiteratureRequest.pending]: pending,
    [operations.fetchLiteratureRequest.rejected]: rejected,
    [operations.fetchLiteratureRequest.fulfilled]: (store, { payload }) => ({
      ...store,
      literature: [...payload],
      loading: false,
      error: null,
    }),

    [operations.addLiteratureRequest.pending]: pending,
    [operations.addLiteratureRequest.rejected]: rejected,
    [operations.addLiteratureRequest.fulfilled]: (store, { payload }) => ({
      ...store,
      literature: [store.literature, ...payload],
      loading: false,
      error: null,
    }),

    [operations.deleteLiteratureRequest.pending]: pending,
    [operations.deleteLiteratureRequest.rejected]: rejected,
    [operations.deleteLiteratureRequest.fulfilled]: (store, { payload }) => ({
      ...store,
      literature: store.literature.filter((el) => el._id !== payload),
      loading: false,
      error: null,
    }),
    // resources //
    [operations.fetchResourcesRequest.pending]: pending,
    [operations.fetchResourcesRequest.rejected]: rejected,
    [operations.fetchResourcesRequest.fulfilled]: (store, { payload }) => ({
      ...store,
      resources: [...payload],
      loading: false,
      error: null,
    }),

    [operations.addResourcesRequest.pending]: pending,
    [operations.addResourcesRequest.rejected]: rejected,
    [operations.addResourcesRequest.fulfilled]: (store, { payload }) => ({
      ...store,
      resources: [store.resources, ...payload],
      loading: false,
      error: null,
    }),

    [operations.deleteResourcesRequest.pending]: pending,
    [operations.deleteResourcesRequest.rejected]: rejected,
    [operations.deleteResourcesRequest.fulfilled]: (store, { payload }) => ({
      ...store,
      resources: store.resources.filter((el) => el._id !== payload),
      loading: false,
      error: null,
    }),
  },
});
export default materialsSlice.reducer;
