import React from 'react';
import styles from './Book.module.css';
import LevelBtn from './LevelBtn';
import btnsData from '../consts/consts';

const Book = () => {
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
      </nav>
    </section>
  );
};

export default Book;