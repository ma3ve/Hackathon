import React, { useEffect, useContext, useReducer } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobDetails from "./pages/JobDetails";
import Profile from "./pages/Profile";
import RegisterLogin from "./pages/RegisterLogin";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div style={{ marginBottom: "25px", padding: 0 }} id="navbar">
        <Navbar />
      </div>
      <Router>
        <Switch>
          <Route component={RegisterLogin} path="/loginregister" exact />
          <Route component={JobDetails} path="/job/:jobId" exact />
          <Route component={Profile} path="/profile/:profileId" exact />
          <Route component={HomePage} path="/:pageId" />
          <Redirect from="/" to="/1" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
