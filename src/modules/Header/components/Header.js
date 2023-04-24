import styles from './Header.module.css';
import { Outlet } from 'react-router-dom';
import React from 'react';
import Nav from './Nav';
import Logo from '../../../UI/Logo/Logo';

const Header = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={`${styles.header__wrapper} ${styles.wrapper}`}>
          <Logo ></Logo>
          <Nav></Nav>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header;