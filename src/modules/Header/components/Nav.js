import React from 'react'
import styles from './Nav.module.css';
import NavItemsValue from '../consts/text';
import NavItem from './NavItem';
import Button from '../../../UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';

const Nav = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <nav className={styles.nav}>
      <ul className={styles["nav__links-list"]}>
        {NavItemsValue.map((itemValue, index) => (
          <NavItem
            key={index}
            path={itemValue.path}
            text={itemValue.text}
          ></NavItem>
        ))}
      </ul>
      {auth ? (
        <Button
          path="/"
          text={"Выход"}
          callBack={() => {
            localStorage.clear()
            dispatch({ type: "CLEAN_AUTH_DATA", auth: '' });
          }}
        ></Button>
      ) : (
        <Button path="/login" text={"Вход"}></Button>
      )}
    </nav>
  );
};

export default Nav;