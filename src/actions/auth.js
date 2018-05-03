import database, { firebase, googleAuthProvider } from "../firebase/firebase.js";
import { startAddUser } from "./user.js";
export const login = (uid) => ({
    type: "LOGIN",
    uid
});

export const startLogin = () => {
  return (dispatch) => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: "LOGOUT"
});

export const startLogOut = () => {
  return () => {
    return firebase.auth().signOut();
  };
};