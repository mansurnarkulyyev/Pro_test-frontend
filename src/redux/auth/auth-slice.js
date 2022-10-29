import { createSlice } from "@reduxjs/toolkit";
import {
  signupRequest,
  signinRequest,
  logoutRequest,
  getCurrentRequest,
} from "../auth/auth-operations";
import { pending, rejected } from "../../shared/utils/utils";

const initialState = {
  email: null,
  token: "",
  isLogin: false,
  isAdmin: false,

  loading: false,
  error: null,
};

const fulfilled = (store, { payload }) => {
  console.log("payload slice", payload);
  store.loading = false;
  store.error = null;
  store.email = payload.email;
  store.token = payload.token;
  store.isAdmin = payload.isAdmin;
  store.isLogin = true;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [signupRequest.pending]: pending,
    [signupRequest.rejected]: rejected,
    [signupRequest.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.error = null;
      store.isAdmin = false;
      store.email = payload.email;
      store.isLogin = false;
    },

    [signinRequest.pending]: pending,
    [signinRequest.rejected]: rejected,
    [signinRequest.fulfilled]: fulfilled,

    [logoutRequest.pending]: pending,
    [logoutRequest.rejected]: rejected,
    [logoutRequest.fulfilled]: () => ({ ...initialState }),

    [getCurrentRequest.pending]: pending,
    [getCurrentRequest.rejected]: rejected,
    [getCurrentRequest.fulfilled]: fulfilled,
  },
});
export default authSlice.reducer;
