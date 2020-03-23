import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase/app";
import "firebase/analytics";
// import "firebase/auth";

var firebaseConfig = {
  apiKey: "$APIKEY",
  authDomain: "$DOMAIN",
  databaseURL: "$URLDB",
  projectId: "$PROJECTID",
  storageBucket: "$STORAGEBUCKET",
  messagingSenderId: "$IDMESSAGING",
  appId: "$APPID",
  measurementId: "$MEASUREMENTID"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
