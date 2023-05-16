import React from 'react';
import Header from '../../../modules/Header/index';
import styles from './BookPage.module.css';
import SvgTop from './SvgTop';
import GameSection from './GameSection';
import Footer from '../../../modules/Footer/index';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookPage = () => {
  const auth = useSelector(state => state.auth);

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
            <ul className={styles["book__nav-links-list"]}>
              <li>
                <NavLink
                  to="book"
                  className={({ isActive }) =>
                    isActive ? styles["active-link"] : styles["inactive-link"]
                  }
                >
                  Учебник
                </NavLink>
              </li>
              {auth && (
                <li>
                  <NavLink
                    to="glossary"
                    className={({ isActive }) =>
                      isActive ? styles["active-link"] : styles["inactive-link"]
                    }
                  >
                    Словарь
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
          <Outlet></Outlet>
          <GameSection></GameSection>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default BookPage;