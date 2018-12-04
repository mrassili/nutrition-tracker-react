import React from "react";
import styles from "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1>NutritionTracker</h1>
      </div>
      <div className={styles.header}>
        <h2>Today</h2>
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
