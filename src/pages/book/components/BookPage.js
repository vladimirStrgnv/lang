import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../modules/Header/index';
import styles from './BookPage.module.css';
import SvgTop from './SvgTop';
import { Outlet } from 'react-router-dom';

const BookPage = () => {
  const dispatch = useDispatch();
  const globalState = useSelector(currenTstate => currenTstate);
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
              <li>Учебник</li>
              <li className={styles['book__glossary-link']}>Словарь</li>
            </ul>
          </nav>
          <nav>
            <h2 className={styles.level__title}>Уровни сложности слов</h2>
          </nav>
          <Outlet></Outlet>
        </div>
      </section>
    </>
  )
}

export default BookPage;