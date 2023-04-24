import React from 'react';
import styles from './LevelBtn.module.css';

const LevelBtn = (props) => {
  return (
    <button className={styles.card}>
        <div className={styles.card__descrpt}>
            <h3>{props.title}</h3>
            <p>{props.amount}</p>
        </div >
        <div className={styles.card__level}>
            <h3>{props.level}</h3>
        </div>
        <div className={styles.card__circle}></div>
    </button>
  )
}

export default LevelBtn