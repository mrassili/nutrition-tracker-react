import React from "react";
import classnames from "classnames";
import styles from "./NavigationButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const HomeButton = () => {
  return (
    <button>
      <FontAwesomeIcon
        icon={faHome}
        className={classnames(styles.icon, "fa-fw")}
      />
      Home
    </button>
  );
};

export default HomeButton;
