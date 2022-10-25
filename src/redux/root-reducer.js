import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/auth-slice";
import localResultsReducer from "./questions/localResults/localResults-reducer";
import remoteResultsReducer from "./questions/remoteResults/remoteResults-reducer";

// const persistConfig = {
//   key: "token",
//   storage,
//   whitelist: ["token"],
// };

// const persistAuthReducer = persistReducer(persistConfig, authReducer);

// const rootReducer = combineReducers({
//   auth: persistAuthReducer,
//   localResults: localResultsReducer,
//   remoteResults: remoteResultsReducer,
// });

// export default rootReducer;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "localResults"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  localResults: localResultsReducer,
  remoteResults: remoteResultsReducer,
});

const persistRootReducer = persistReducer(persistConfig, rootReducer);

export default persistRootReducer;
