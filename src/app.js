import { addExpense } from "./actions/expenses"
import AppRouter from "./routers/AppRouter"
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { setTextFilter } from "./actions/filters";
import { startSetExpenses } from "./actions/expenses"
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css"
import { firebase } from "./firebase/firebase";
import LoginPage from "./components/LoginPage";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("root"));
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("log in");
  } else {
    console.log("log out");
  }
});