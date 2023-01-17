import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
import reportWebVitals from "./reportWebVitals";
import { CoreRouter } from "./core/router";
import { getAuth } from "firebase/auth";
import { AuthContext } from "./context/authContext";
import { FocusStyleManager } from "@blueprintjs/core";
FocusStyleManager.onlyShowFocusOnTabs();

const firebaseConfig = {
  apiKey: "AIzaSyCS_lv3_M7Kw8eOFA45HE3ciEnFGkDj0As",
  authDomain: "subs-manager-9a705.firebaseapp.com",
  projectId: "subs-manager-9a705",
  storageBucket: "subs-manager-9a705.appspot.com",
  messagingSenderId: "879889479417",
  appId: "1:879889479417:web:1d1c7e098d21f17dbad428",
  measurementId: "G-VLE1MYYBVF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContext.Provider
      value={{
        auth,
        app,
      }}
    >
      <CoreRouter />
    </AuthContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
