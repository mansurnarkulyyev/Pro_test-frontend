import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/auth-slice";
import addQuestionsKindReducer from "./questions/questionsKind/questionsKind-reducer";
import localResultsReducer from "./questions/localResults/localResults-reducer";
import remoteResultsReducer from "./questions/remoteResults/remoteResults-reducer";

const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistAuthReducer,
  questionsKind: addQuestionsKindReducer,
  localResults: localResultsReducer,
  remoteResults: remoteResultsReducer,         
});

export default rootReducer;
