import React from 'react';
import styles from './Footer.module.css';
import Svg from './Svg';
import Logo from '../../../UI/Logo/Logo';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Svg></Svg>
      <div className={`${styles.wrapper} ${styles.footer__wrapper}`}>
        <Logo></Logo>
        <nav className={styles.footer__nav}>
          <h2 className={styles.footer__title}>Меню</h2>
          <ul>
            <li className={styles['footer__nav-item']}>Главная</li>
            <li className={styles['footer__nav-item']}>Учебник</li>
            <li className={styles['footer__nav-item']}> Статистика</li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer