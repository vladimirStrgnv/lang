import React from 'react';
import styles from './LevelBtn.module.css';
import { Link, NavLink } from 'react-router-dom';

const LevelBtn = (props) => {
  return (
    <NavLink className={styles.card} to={props.level}>
        <div className={styles.card__descrpt}>
            <h3>{props.title}</h3>
            <p>{props.amount}</p>
        </div >
        <div className={styles.card__level}>
            <h3>{props.level}</h3>
        </div>
        <div className={styles.card__circle}></div>
    </NavLink>
  )
}

export default LevelBtn