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

const Home = (props) => {
  const { weight, height, age, gender } = props.location.state;
  const calorieIntake =
    10 * weight + 6.25 * height - 5 * age + (gender === "Male" ? 5 : 10) * 1.4;
  const macros = {
    protein: Math.floor((0.3 * calorieIntake) / 4),
    fat: Math.floor((0.3 * calorieIntake) / 9),
    carb: Math.floor((0.4 * calorieIntake) / 4),
  };

  return (
    <div className={styles.container}>
      <Logo />
      <Header />
      <Sidebar data={props.location.state} />
      <Router>
        <Overview path="/overview" macros={macros} />
        <FoodLog path="/food-log" />
        <Settings path="/settings" />
        <Redirect default from="/" to="/overview" noThrow />
      </Router>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <Router>
        <GetStartedForm path="/" />
        <Home path="/*" />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
