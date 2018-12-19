import React from "react";
import classnames from "classnames";
import styles from "./NavigationButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

const FoodLogButton = () => {
  return (
    <button>
      <FontAwesomeIcon
        icon={faClipboardList}
        className={classnames(styles.icon, "fa-fw")}
      />
      Food Log
    </button>
  );
};

export default FoodLogButton;
