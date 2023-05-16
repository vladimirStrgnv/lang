import React from 'react';
import styles from './BurgerSvg.module.css'

const BurgerSvg = (props) => {
  return (
    <svg viewBox="0 0 100 70" width="40" height="25" fill="white" className={styles.svg} onClick={props.setActive}>
      <rect width="100" height="10"></rect>
      <rect y="30" width="100" height="10"></rect>
      <rect y="60" width="100" height="10"></rect>
    </svg>
  );
};

export default BurgerSvg;