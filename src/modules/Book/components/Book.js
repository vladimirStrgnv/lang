import React from 'react';
import styles from './Book.module.css';
import LevelBtn from './LevelBtn';
import btnsData from '../consts/consts';
import Page from './BookSection';
import { Route, Routes } from 'react-router-dom';
import Api from '../../../api/api';

const Book = () => {
  console.log(Api.getWords(1,1))
  return (
    <section>
      <nav>
        <h2 className={styles.level__title}>Уровни сложности слов</h2>
        <div className={styles.levels__wrapper}>
            {btnsData.map((btnData, index) => 
                <LevelBtn
                    title={btnData.title}
                    amount={btnData.amount}
                    level={btnData.level}
                    key={index}
                ></LevelBtn>
            )}
        </div>
        <Routes>
          <Route path='A1' element={<Page></Page>}></Route>   
          <Route path='A2' element={<Page></Page>}></Route>        
          <Route path='B1' element={<Page></Page>}></Route>        
          <Route path='B2' element={<Page></Page>}></Route>        
          <Route path='C1' element={<Page></Page>}></Route>        
          <Route path='C2' element={<Page></Page>}></Route>        

        </Routes>
      </nav>
    </section>
  );
};

export default Book;