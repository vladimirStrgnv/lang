import React from 'react'
import styles from './Nav.module.css';
import NavItemsValue from '../consts/text';
import NavItem from './NavItem';
import Button from '../../../UI/Button/Button';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles["nav__links-list"]}>
        {NavItemsValue.map((itemValue ,index) => 
            <NavItem 
                key={index}
                path={itemValue.path}
                text={itemValue.text}
            ></NavItem>)}
      </ul>
      <Button path='/login'></Button>
    </nav>
  );
};

export default Nav;