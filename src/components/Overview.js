import React from "react";
import styles from "./Overview.css";
import Trend from "react-trend";

const Overview = () => {
  return (
    <div className={styles.content}>
      <div className={styles.item}>Protein intake</div>
      <div className={styles.item}>Carb intake</div>
      <div className={styles.item}>Fat intake</div>
      <div className={styles.item}>
        Chart goes here : calories intake progress over time
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
    </div>
  );
};

export default Overview;
