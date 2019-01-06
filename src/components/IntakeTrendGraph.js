import React from "react";
import styles from "./IntakeTrendGraph.css";
import Trend from "react-trend";

const ProteinIntake = () => {
  return (
    <div className={styles.item}>
      Calorie intake trend over time
      <br />
      <Trend
        smooth
        autoDraw
        autoDrawDuration={3000}
        autoDrawEasing="ease-out"
        data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]}
        gradient={["#00935f", "#00ffb2"]}
        radius={10}
        strokeWidth={2}
        strokeLinecap={"round"}
        className={styles.trend}
      />
    </div>
  );
};

export default ProteinIntake;
