import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <FontAwesomeIcon
        icon={faAngleLeft}
        onClick={() => alert("Left btn clicked!")}
        className={styles.leftAngleIcon}
      />
      <h2>Today</h2>
      <FontAwesomeIcon
        icon={faAngleRight}
        onClick={() => alert("Right btn clicked!")}
        className={styles.rightAngleIcon}
      />
      <span className={styles.date}>Mon, 25 Nov 2018</span>
    </div>
  );
};

export default Header;
