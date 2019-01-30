import React from "react";
import styles from "./IntakeCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBreadSlice } from "@fortawesome/free-solid-svg-icons";

const CarbIntake = (props) => {
  return (
    <div className={styles.item}>
      <h2>Carb</h2>
      <FontAwesomeIcon icon={faBreadSlice} />
      <meter
        className={styles.meter}
        min="0"
        max="500"
        value={props.qty}
        id={styles.carb}
      />
      <span>You need {props.qty}g</span>
      <p>
        Carb is not essential but it is the bodies preferred energy source,
        especially during stress and exercise. When glycogen levels get low in
        the body, cortisol levels rise.
      </p>
    </div>
  );
};

export default CarbIntake;
