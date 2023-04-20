import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  return (
    <div className={`${styles.input__wrapper} ${props.className}`}>
        <input type={props.type} required="required" className={styles.input}/>
        <label className={styles.input__placeholder} required="required" >{props.text}</label>
    </div>
  )
}

export default Input