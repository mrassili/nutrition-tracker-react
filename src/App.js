import React from "react";
import ReactDOM from "react-dom";

import styles from "./App.css"; //eslint-disable-line
import Overview from "./components/Overview";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import logo from "./images/logo.png";
import FoodLog from "./components/FoodLog";
import Settings from "./components/Settings";

import { Link } from "@reach/router";

import { Router } from "@reach/router";

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" className={styles.link}>
            <img src={logo} alt="logo" id={styles.logo} />
            Nutrition Tracker
          </Link>
        </div>
        <Header />
        <Sidebar />
        <Router>
          <Overview default path="/" />
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
