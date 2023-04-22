import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  return (
    <div className={`${styles.input__wrapper} ${props.className}`}>
        <input type={props.type} required="required" className={styles.input} onInput={props.onInput}/>
        <label 
          className={props.state.value === ''?
          styles.input__placeholder :
          `${styles.input__placeholder} ${styles['input__placeholder-active']}`} required="required" >{props.text}
        </label>
        {!props.state.isValid && props.state.value !== '' && <p className={`${styles.input__warn}`}>{props.state.noValidTxt}</p>}
    </div>
  )
}

export default Input;