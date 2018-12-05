import React from "react";
import ReactDOM from "react-dom";

import styles from "./App.css"; //eslint-disable-line
import Dashboard from "./components/Dashboard";

const App = () => {
  return <Dashboard />;
};

ReactDOM.render(<App />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
