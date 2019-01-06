import React from "react";
import styles from "./Logo.css";
import logo from "../images/logo.png";
import { Link } from "@reach/router";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/overview" className={styles.link}>
        <img src={logo} alt="logo" id={styles.logo} />
        Nutrition Tracker
      </Link>
    </div>
  );
};

export default Logo;
