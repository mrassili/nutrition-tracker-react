import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faClipboardList,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Sidebar.css";
import avatar from "../images/avatar.png";
import classnames from "classnames";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <img className={styles.avatar} alt="avatar" src={avatar} />
        <div className={styles.userInfo}>
          <span>Full Name</span>
          <br />
          <span>Male | 20 Years</span>
          <br />
          <span>Height : 176 | Weight : 80</span>
        </div>
        <svg className={classnames(styles.hLine)}>
          <line
            x1="25%"
            x2="75%"
            y1="2"
            y2="2"
            stroke="#009261b5"
            strokeWidth="3"
          />
        </svg>
        <ul className={styles.menu}>
          <li>
            <button
              onClick={() => alert("Home btn clicked!")}
              className={styles.menuBtn}
            >
              <FontAwesomeIcon
                icon={faHome}
                className={classnames(styles.homeIcon, "fa-fw")}
              />
              Home
            </button>
          </li>
          <svg className={classnames(styles.hLine)}>
            <line
              x1="0"
              x2="100%"
              y1="2"
              y2="2"
              stroke="#009261b5"
              strokeWidth="3"
            />
          </svg>

          <li>
            <button
              onClick={() => alert("FoodLog btn clicked!")}
              className={styles.menuBtn}
            >
              <FontAwesomeIcon
                icon={faClipboardList}
                className={classnames(styles.clipboardIcon, "fa-fw")}
              />
              Food Log
            </button>
          </li>
          <svg className={classnames(styles.hLine)}>
            <line
              x1="0"
              x2="100%"
              y1="2"
              y2="2"
              stroke="#009261b5"
              strokeWidth="3"
            />
          </svg>
          <li>
            <button
              onClick={() => alert("Settings btn clicked!")}
              className={styles.menuBtn}
            >
              <FontAwesomeIcon
                icon={faCog}
                className={classnames(styles.settingsIcon, "fa-fw")}
              />
              Settings
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
