import styles from './Header.module.css';
import { Outlet } from 'react-router-dom';
import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={`${styles.header__wrapper} ${styles.wrapper}`}>
          <div className={styles.logo}>Lang.</div>
          <Nav></Nav>
        </div>
      </header>
      <Outlet></Outlet>
    </React.Fragment>
  )
}

export default Header;