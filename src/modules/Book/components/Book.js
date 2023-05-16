import React from 'react';
import styles from './Book.module.css';
import LevelBtn from '../../../components/LevelBtn/LevelBtn';
import btnsData from '../consts/consts';
import BookSection from '../../../components/BookSection.js/BookSection';
import useCreateStore from '../store/store'
import Api from '../../../api/api';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Book = () => {
  const {sectionDispatch, wordsDispatch, pageDispatch, wordDispatch, wordIdDispatch, wordDataDispatch, state} = useCreateStore();
  const {section, words, page, wordId, word} = state;
  const auth = useSelector((state) => state.auth);
  useEffect(()=>{
    const fetch = async () => {
      const wordsRequest = auth? await Api.getAggregatedWords(section, page) : await Api.getWords(section, page);
      const currentWord = auth && wordId != ''? await Api.getUserWord(wordId) : await Api.getWord(wordId);
      if (wordsRequest == undefined) {
        throw new Error('ошибка сети')
      }
      wordsDispatch(wordsRequest);
      wordDispatch(currentWord);
      if (wordsRequest?.length) {
        if (!wordId) wordIdDispatch(wordsRequest[0].id || wordsRequest[0]._id);
      }
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
        </nav>
        <h2 className={styles.page__title}>Слова</h2>
        <BookSection
          auth={auth}
          words={words}
          section={section}
          wordId={wordId}
          setCurrentWordId={wordIdDispatch}
          setCurrentPage={pageDispatch}
          wordData={word}
          page={page}
          wordsChangingBtns={[
            {
              title: 'В СЛОЖНЫЕ СЛОВА',
              difficulty: 'difficulty',
              reqFunc: (id, difficulty) => {
                Api.createUserWord(id, difficulty)
                wordDataDispatch(id, difficulty)
              }
            },
            {
              title: 'В ИЗУЧЕННЫЕ СЛОВА',
              difficulty: 'learned',
              reqFunc: (id, difficulty) => {
                Api.createUserWord(id, difficulty)
                wordDataDispatch(id, difficulty)
              }
            }
          ]}
        ></BookSection>
    </section>
  );
};

export default Book;