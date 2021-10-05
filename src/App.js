import React from "react";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import AuthProvider from "./contexts/Auth-state";

const App = () => {
  return (
    <AuthProvider>
      <SignUp />
      <SignIn />
    </AuthProvider>
  );
};

export default App;
