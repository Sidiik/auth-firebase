import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC_PFXBC7qQ41sSgkn2UfPOu3MZQcc594U",
  authDomain: "auth-dev-28adb.firebaseapp.com",
  projectId: "auth-dev-28adb",
  storageBucket: "auth-dev-28adb.appspot.com",
  messagingSenderId: "471041483350",
  appId: "1:471041483350:web:cd749dc4e5483c1d7891f7",
});

export const auth = app.auth();
export default app;
