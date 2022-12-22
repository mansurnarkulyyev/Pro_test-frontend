import { createAsyncThunk } from "@reduxjs/toolkit";
// import { createOperation } from "../../shared/utils/utils";
import * as api from "../../shared/api/auth";
// import { signin, signup, logout, getCurrent } from "../../shared/api/auth";

// export const signupRequest = createOperation("auth/signup", signup);
// export const signinRequest = createOperation("auth/signin", signin);
// export const logoutRequest = createOperation("auth/logout", logout);




export const signupRequest = createAsyncThunk(
    "auth/signup",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.signup(data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const signinRequest = createAsyncThunk(
    "auth/signin",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.signin(data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const logoutRequest = createAsyncThunk(
    "auth/logout",
    async(_, {rejectWithValue}) => {
        try {
            const result = await api.logout();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)



export const getCurrentRequest = createAsyncThunk(
  "auth/current",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const response = await api.getCurrent(auth.token);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
