import React from "react";
import styles from "./Overview.css";
import ProteinIntake from "./ProteinIntake";
import CarbIntake from "./CarbIntake";
import FatIntake from "./FatIntake";
import IntakeTrendGraph from "./IntakeTrendGraph";

const Overview = () => {
  return (
    <div className={styles.content}>
      <ProteinIntake />
      <CarbIntake />
      <FatIntake />
      <IntakeTrendGraph />
    </div>
  );
};

export default Overview;
