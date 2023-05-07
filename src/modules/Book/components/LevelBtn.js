import React from 'react';
import styles from './LevelBtn.module.css';
import { Link, NavLink } from 'react-router-dom';

const LevelBtn = (props) => {
  return (
    <div className={props.currentSection === props.section? `${styles.card} ${styles.card__active}` : `${styles.card}`}  onClick={() => {props.setBookSection(props.section)}}>
        <div className={styles.card__descrpt}>
            <h3>{props.title}</h3>
            <p>{props.amount}</p>
        </div >
        <div className={styles.card__level}>
            <h3>{props.level}</h3>
        </div>
        <div className={styles.card__circle}></div>
    </div>
  )
}

export default LevelBtn;