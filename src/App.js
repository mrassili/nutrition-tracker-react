import React from "react";
import ReactDOM from "react-dom";

import styles from "./App.css"; //eslint-disable-line
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import logo from "./images/logo.png";
import FoodLog from "./components/FoodLog";
import Settings from "./components/Settings";

import { Router } from "@reach/router";

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" id={styles.logo} />
          <h1>Nutrition Tracker</h1>
        </div>
        <Header />
        <Sidebar />
        <Router>
          <Dashboard default path="/" />
          <FoodLog path="/food-log" />
          <Settings path="/settings" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
