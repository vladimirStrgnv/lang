import React from 'react';
import styles from './Book.module.css';
import LevelBtn from './LevelBtn';
import btnsData from '../consts/consts';
import BookSection from './BookSection';
import useCreateStore from '../store/store'
import Api from '../../../api/api';
import { useEffect, useState } from 'react';

const Book = () => {
  const {sectionDispatch, wordsDispatch, pageDispatch, wordDispatch, wordIdDispatch, state} = useCreateStore();
  const {section, words, page, wordId, word} = state;
  useEffect(()=>{
    const fetch = async () => {
      const wordsRequest = await Api.getWords(section, page);
      const currentWord = await Api.getWord(wordId);
      wordsDispatch(wordsRequest);
      wordDispatch(currentWord);
      if (!wordId) wordIdDispatch(wordsRequest[0].id)
    };
    fetch();
  }, [page, section, wordId]);
  return (
    <section>
      <nav>
        <h2 className={styles.level__title}>Уровни сложности слов</h2>
        <div className={styles.levels__wrapper}>
          {btnsData.map((btnData, index) => (
            <LevelBtn
              key={index}
              title={btnData.title}
              amount={btnData.amount}
              level={btnData.level}
              section={btnData.section}
              currentSection={section}
              setBookSection={sectionDispatch}
            ></LevelBtn>
          ))}
        </div>
        <h2 className={styles.page__title}>Слова</h2>
        <BookSection
          words={words}
          section={section}
          wordId={wordId}
          setCurrentWordId={wordIdDispatch}
          setCurrentPage={pageDispatch}
          wordData={word}
          page={page}
        ></BookSection>
      </nav>
    </section>
  );
};

export default Book;