import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1>Nutrition Tracker</h1>
      </div>
      <div className={styles.header}>
        <FontAwesomeIcon icon={faAngleLeft} />
        <h2>Today</h2>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      <div className={styles.sidebar}>
        <ul>
          <li>Home</li>
          <li>Food Log</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className={styles.content}>
        <h1>Content</h1>
      </div>
    </div>
  );
};

export default Dashboard;
