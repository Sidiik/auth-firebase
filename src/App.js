import React from "react";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import AuthProvider from "./contexts/Auth-state";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
