import React from 'react';
import styles from './Registration.module.css';
import Logo from '../../../UI/Logo/Logo';
import RegForm from '../../../modules/RegForm/index';
import Svg from './Svg';


const Registration = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.header__wrapper}`}>
            <Logo></Logo>
        </div>
      </header>
      <section className={styles.reg}>
        <div className={`${styles.reg__wrapper} ${styles.wrapper}`}>
            <RegForm></RegForm>
            <img className={styles.reg__img} src={require('../assets/login.png')}></img>
            <Svg></Svg>

        </div>
      </section>
    </>
  );
};

export default Registration;