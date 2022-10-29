import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/auth-slice";
import materialsReducer from "./materials/materials-slice";
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

const authPersistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const persistConfig = {
  key: "localResults",
  storage,
  whitelist: ["localResults"],
};

const authPersistReducer = persistReducer(authPersistConfig, authReducer);

const rootReducer = combineReducers({
  auth: authPersistReducer,
  localResults: localResultsReducer,
  remoteResults: remoteResultsReducer,
  materials: materialsReducer,
});

const persistRootReducer = persistReducer(persistConfig, rootReducer);

export default persistRootReducer;
