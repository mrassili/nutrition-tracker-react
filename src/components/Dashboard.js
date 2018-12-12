import React from "react";
import styles from "./Dashboard.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1>Nutrition Tracker</h1>
      </div>
      <Header />
      <Sidebar />
      <div className={styles.content}>
        <h1>Content</h1>
      </div>
    </div>
  );
};

export default Dashboard;
