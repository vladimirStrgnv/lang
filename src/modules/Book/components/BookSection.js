import React, { useEffect, useState } from 'react';
import styles from './BookSection.module.css';
import Pagination from './Pagination';
import Api from '../../../api/api';
import Word from './Word';

const Page = () => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(()=>{
    const fetchWords = async () => {
      setLoading(true);
      const res = await Api.getWords(0, currentPage);
      setWords(res);
      setLoading(false);
      console.log(res)

    };
    fetchWords();
  }, [currentPage]);

  if (loading && words.length === 0) {
    return (
      <h2>Loading....</h2>
    )
  }
  
  return (
    <section>
        <h2 className={styles.page__title}>Слова</h2>
        <div className={styles['words-container']}>
          {words.map((word) => {
            return <Word
            key={word.id}
            word={word.word}
            translate={word.wordTranslate}
            >
            </Word>
          })}
        </div>
        <Pagination 
          pagesCount = {30}
          setCurrentPage = {setCurrentPage}
        ></Pagination>
    </section>
  )
}

export default Page;