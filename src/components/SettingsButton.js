import React from "react";
import classnames from "classnames";
import styles from "./NavigationButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const SettingsButton = () => {
  return (
    <button>
      <FontAwesomeIcon
        icon={faCog}
        className={classnames(styles.icon, "fa-fw")}
      />
      Settings
    </button>
  );
};

export default SettingsButton;
