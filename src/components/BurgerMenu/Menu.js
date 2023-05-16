import React from "react";
import styles from "./Menu.module.css";
import Logo from '../../UI/Logo/Logo';
import CrossSvg from './CrossSvg';

const Menu = (props) => {
  return (
    <div className={props.menuActive? `${styles.menu} ${styles.active}` : `${styles.menu}`}>
      <div className={styles.blur}></div>
      <div className={styles.menu__content}>
        <div className={styles.menu__header}>
          <CrossSvg setActive={()=> {props.setMenuActive(!props.menuActive)}}></CrossSvg>
          <Logo style={styles.menu__logo}></Logo>
        </div>
        <ul>
          {props.items.map((item) => {
          return (<li>
              <a href={item.href}>{item.value}</a>
            </li>)
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;