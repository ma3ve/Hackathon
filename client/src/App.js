import React, { useEffect, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobDetails from "./pages/JobDetails";
import Profile from "./pages/Profile";
import RegisterLogin from "./pages/RegisterLogin";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={RegisterLogin} path="/loginregister" exact />
          <Route component={JobDetails} path="/job/:jobId" exact />
          <Route component={Profile} path="/profile/:profileId" exact />
          <Route component={HomePage} path="/" exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
