import React from "react";
import styles from "./IntakeCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEgg } from "@fortawesome/free-solid-svg-icons";

const ProteinIntake = (props) => {
  return (
    <div className={styles.item}>
      <h2>Protein</h2>
      <FontAwesomeIcon icon={faEgg} />
      <meter
        className={styles.meter}
        min="0"
        max="350"
        value={props.qty}
        id={styles.protein}
      />
      <span>You need {props.qty}g</span>
      <p>
        Protein is essential for growth and on-going repair, nitrogen balance,
        enzymes that catalyse innumerable chemical reactions, cell signalling
        and signal transaction.
      </p>
    </div>
  );
};

export default ProteinIntake;
