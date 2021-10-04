import { createContext, useContext } from "react";

const AuthState = createContext();

function useAuth() {
  return useContext(authState);
}

import React from "react";

const AuthProvider = ({ children }) => {
  return <AuthState.Provider>{children}</AuthState.Provider>;
};

export default AuthProvider;
