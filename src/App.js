import React, { Component } from 'react';
import { Provider } from "react-redux";
import configureStore from "./store/configureStore.js";
import database, { firebase } from "./firebase/firebase.js";
import logo from './logo.svg';
import './App.css';
import { login, logout } from "./actions/auth.js";
import AppRouter, { history } from "./routes/AppRouter.js";
import { startSetBooks } from "./actions/books.js";
import { startAddUser, addUser } from "./actions/user.js";

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

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));

    database.ref("users").child(user.uid).once("value",snapshot => {
      const userData = snapshot.val();
      if (userData) {
        store.dispatch(addUser(userData));
      } else {
        store.dispatch(startAddUser());
      } 
    });

    if (history.location.pathname === "/") {
      history.push("/dashboard");
    }
  } else {
    store.dispatch(logout());    
    history.push("/");
  }
});

// store.dispatch(addUser({uid: '123'}));
// startAddUser({fullName: 'asdf'});

// const userinfo = {
//   uid: '123'
// };

// database.ref(`users`).push(userinfo).then((ref) => {
//   store.dispatch(addUser({
//     id: ref.key,
//     ...userinfo
//   }));
// });

// try {
//   startAddUser({uid: "asd", fullName: 'hi', city: 'hehe', state: 'asdf'});
// }
// catch(err) {
//   console.log(err);
// }


export default App;
