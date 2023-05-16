import React from 'react';
import styles from './Glossary.module.css';
import LevelBtn from '../../../components/LevelBtn/LevelBtn';
import useCreateStore from '../store/index';
import Api from '../../../api/api';
import { useEffect } from 'react';
import BookSection from '../../../components/BookSection.js/BookSection';
import btnsData from '../consts/consts';
import { useSelector } from 'react-redux';

const Glossary = () => {
  const {sectionDispatch, wordsDispatch, pageDispatch, wordDispatch, wordIdDispatch, difficultyDispatch, deleteWordDispatch, state} = useCreateStore();
  const {section, words, page, wordId, word, difficulty} = state;
  const auth = useSelector((state) => state.auth);
  useEffect(()=>{
    const fetch = async () => {
      const wordsRequest = await Api.getAggregatedWords(section, page);
      const wordsPage = wordsRequest.filter(word => word.userWord).filter(word => word.userWord.difficulty === difficulty);
      const currentWord = await Api.getWord(wordId);
      wordsDispatch(wordsPage);
      wordDispatch(currentWord);
      if (wordsPage.length) {
        if (!wordId) wordIdDispatch(wordsPage[0]._id);
      }
    };
    fetch();
  }, [page, section, wordId, difficulty]);
  return (
    <section className={styles.glossary}>
      <nav className={styles.glossary__nav}>
        <h2>Выберите раздел</h2>
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
        <h2>Выберите уровень сложности</h2>
        <div className={styles.levels__wrapper}>
          <LevelBtn
              title={'Сложные'}
              amount={'слова'}
              level={'C'}
              section={'difficulty'}
              currentSection={difficulty}
              setBookSection={difficultyDispatch}
            ></LevelBtn>
              <LevelBtn
              title={'Изученные'}
              amount={'слова'}
              level={'И'}
              section={'learned'}
              currentSection={difficulty}
              setBookSection={difficultyDispatch}
            ></LevelBtn>
          </div>
      </nav>
      <h3 className={styles.page__title}>Слова</h3>
      <BookSection
          auth = {auth}
          words={words}
          section={section}
          wordId={wordId}
          setCurrentWordId={wordIdDispatch}
          setCurrentPage={pageDispatch}
          wordData={word}
          page={page}
          wordsChangingBtns={[
            {
              title: 'УДАЛИТЬ',
              reqFunc: (id) => {
                Api.deleteUserWord(id)
                deleteWordDispatch(id)
              }
            }
          ]}
        ></BookSection>
    </section>
  );
}

export default Glossary;