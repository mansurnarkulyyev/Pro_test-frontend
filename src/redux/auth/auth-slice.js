import { createSlice } from "@reduxjs/toolkit";
import {
  signupRequest,
  signinRequest,
  logoutRequest,
  getCurrentRequest,
} from "../auth/auth-operations";
import { pending, rejected } from "../../shared/utils/utils";

const initialState = {
  user: {},
  token: "",
  isLogin: false,

  loading: false,
  error: null,
};

const fulfilled = (store, { payload }) => {
  store.loading = false;
  store.error = null;
  store.user = {
    email: payload.user.email,
    id: payload.user.id,
  };
  store.token = payload.accessToken;
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
      store.user = payload;
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
    [getCurrentRequest.fulfilled]: (store, { payload }) => {
      return {
        ...store,
        loading: false,
        error: null,
        user: {
          email: payload.email,
          id: payload.id,
        },
        isLogin: true,
      };
    },
  },
});
export default authSlice.reducer;
