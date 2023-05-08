import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <Link to={props.path}>
      <button className={styles.nav__btn} onClick={props.callBack}>
        {props.text}
      </button>
    </Link>
  );
};

export default Button;
