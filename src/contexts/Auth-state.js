import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { auth } from "../firebase/config";

const AuthState = createContext();

export function useAuth() {
  return useContext(AuthState);
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setCurrentUser(user));
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
  };

  return <AuthState.Provider value={value}>{children}</AuthState.Provider>;
};

export default AuthProvider;
