import styles from './BookSection.module.css';
import Pagination from './Pagination';
import Word from './WordTable';
import WordCard from '../../../components/WordCard/WordCard';

const BookSection = (props) => {

  return (
    <section >
        <div className={styles['words-section-container']}>
          <div className={styles['words-container']}>
            {props.words.map((word) => {
              return <Word
              key={word.id}
              word={word.word}
              translate={word.wordTranslate}
              id={word.id}
              setCurrentWordId = {props.setCurrentWordId}
              currentWordId = {props.wordId}
              >
              </Word>
            })}
          </div>
          <WordCard
            wordData = {props.wordData}
          ></WordCard>
        </div>
        <Pagination 
          pagesCount = {30}
          setCurrentPage = {props.setCurrentPage}
        ></Pagination>
    </section>
  )
}

export default BookSection;