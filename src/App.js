import React from "react";
import ReactDOM from "react-dom";

import styles from "./App.css"; //eslint-disable-line
import Overview from "./components/Overview";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import FoodLog from "./components/FoodLog";
import Settings from "./components/Settings";
import Logo from "./components/Logo";
import GetStartedForm from "./components/GetStartedForm";

import { Router, Redirect } from "@reach/router";

const Home = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <Header />
      <Sidebar />
      <Router>
        <Overview path="/overview" />
        <FoodLog path="/food-log" />
        <Settings path="/settings" />
        <Redirect default from="/" to="/overview" noThrow />
      </Router>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <GetStartedForm path="get-started" />
      <Home path="/*" />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
