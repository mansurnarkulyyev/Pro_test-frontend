import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { LocalToastProvider } from "react-local-toast";

import "./shared/styles/main.scss";
import "react-local-toast/dist/bundle.css";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import App from "./App";

import { store, persistor } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LocalToastProvider>
          <App />
        </LocalToastProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
