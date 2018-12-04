import React from "react";
import ReactDOM from "react-dom";

import styles from "./App.css"; //eslint-disable-line
import Dashboard from "./Components/Dashboard";

const App = () => {
  return <Dashboard />;
};

ReactDOM.render(<App />, document.getElementById("app"));
