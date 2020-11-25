import { firebase, googleAuthProvider } from "../firebase/firebase";

export const startLogin = () => {
  console.log("attempt startLogin");
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
      .then(() => {
        console.log("successful sign in")
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const startLogout = () => {
  console.log("attempt startLogout");
  return () => {
    return firebase.auth().signOut()
    .then(() => {
      console.log("successful sign out");
    }).catch((err) => {
      console.log(err);
    });
  };
};