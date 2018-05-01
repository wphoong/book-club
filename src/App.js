import React, { Component } from 'react';
import { Provider } from "react-redux";
import configureStore from "./store/configureStore.js";
import logo from './logo.svg';
import './App.css';
import { login, logout } from "./actions/auth.js";
import { firebase } from "./firebase/firebase.js";
import AppRouter, { history } from "./routes/AppRouter.js";
import { addBook, removeBook } from "./actions/books.js";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}


const state = store.getState();
console.log(state);

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});



// firebase.auth().onAuthStateChanged((user) => {
//   if (!user) {
//     store.dispatch(login(user.uid));
//     console.log("uid", user.uid);
    
//     if (history.location.pathname === "/") {
//       history.push("/dashboard");
//     }

//   } else {
//     store.dispatch(logout());    
//     history.push("/");
//   }
// });

export default App;
