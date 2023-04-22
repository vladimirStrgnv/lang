import React from 'react';
import styles from './Auth.module.css';
import Logo from '../../../UI/Logo/Logo';
import LoginForm from '../../../modules/LoginForm/index';
import Svg from './Svg';

const Auth = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.header__wrapper}`}>
          <Logo></Logo>
        </div>
      </header>
      <section className={styles.auth}>
        <div className={`${styles.auth__wrapper} ${styles.wrapper}`}>
          <LoginForm></LoginForm>
          <img className={styles.auth__img} src={require('../assets/login.png')} alt='img'></img>
        </div>
        <Svg></Svg>
      </section>
    </>
  )
}

export default Auth;