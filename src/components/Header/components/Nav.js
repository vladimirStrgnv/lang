import React from 'react'
import styles from './Nav.module.css';
import NavItemsValue from '../consts/text';
import NavItem from './NavItem';
import Button from '../../../UI/Button/Button';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles["nav__links-list"]}>
        {NavItemsValue.map(itemValue => 
            <NavItem 
                path={itemValue.path}
                text={itemValue.text}
            ></NavItem>)}
      </ul>
      <Button path='auth'></Button>
    </nav>
  );
};

export default Nav;