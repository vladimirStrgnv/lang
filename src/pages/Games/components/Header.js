import React from 'react';
import styles from './Header.module.css';
import Logo from '../../../UI/Logo/Logo';
import BurgerSvg from './BurgerSvg';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={`${styles.wrapper} ${styles.header__wrapper}`}>
        <nav className={styles.nav}>
          <BurgerSvg setActive={()=> {props.setMenuActive(!props.menuActive)}}></BurgerSvg>
          <Logo ></Logo>
        </nav>
      </div>
    </header>
  );
};

export default Header;