import React from "react";
import styles from "./Overview.css";
import ProteinIntake from "./ProteinIntake";
import CarbIntake from "./CarbIntake";
import FatIntake from "./FatIntake";
import IntakeTrendGraph from "./IntakeTrendGraph";

const Overview = (props) => {
  return (
    <div className={styles.content}>
      <ProteinIntake qty={props.macros.protein} />
      <CarbIntake qty={props.macros.carb} />
      <FatIntake qty={props.macros.fat} />
      <IntakeTrendGraph />
    </div>
  );
};

export default Overview;
