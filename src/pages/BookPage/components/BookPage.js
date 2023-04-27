import React from 'react';
import Header from '../../../modules/Header/index';
import styles from './BookPage.module.css';
import SvgTop from './SvgTop';
import { NavLink, Outlet } from 'react-router-dom';

const BookPage = () => {
  return (
    <>
      <Header></Header>
      <section className={styles.animation}>
        <div className={`${styles.animation__wrapper} ${styles.wrapper}`}>
        <SvgTop></SvgTop>
        </div>
      </section>
      <section className={styles.book}>
        <div className={`${styles.book__wrapper} ${styles.wrapper}`}>
          <nav className={styles.book__nav}>
            <ul className={styles['book__nav-links-list']}>
              <li><NavLink to='book' className={({isActive}) => isActive ? styles['active-link'] : styles['inactive-link']}>Учебник</NavLink></li>
              <li><NavLink to='glossary' className={({isActive}) => isActive ? styles['active-link'] : styles['inactive-link']}>Словарь</NavLink></li>
            </ul>
          </nav>
          <Outlet></Outlet>
        </div>
      </section>
    </>
  )
}

export default BookPage;