import styles from './BookSection.module.css';
import Pagination from '../Pagination/Pagination';
import WordTable from '../WordTable/WordTable';
import WordCard from '../WordCard/WordCard';

const BookSection = (props) => {
  return (
    <section>
      <div className={styles["words-section-container"]}>
        <div className={styles["words-container"]}>
          {props.words.length ? (
            props.words.map((word) => {
              return (
                <WordTable
                  key={word.id || word._id}
                  difficulty={word.userWord?.difficulty}
                  word={word.word}
                  translate={word.wordTranslate}
                  id={word.id || word._id}
                  setCurrentWordId={props.setCurrentWordId}
                  currentWordId={props.wordId}
                ></WordTable>
              );
            })
          ) : (
            <h3>В данный момент слова отсутствуют</h3>
          )}
        </div>
        {<WordCard 
          auth={props.auth}
          wordData={props.wordData}
          btnsData = {props.wordsChangingBtns}
        ></WordCard>}
      </div>
      <Pagination
        pagesCount={30}
        setCurrentPage={props.setCurrentPage}
      ></Pagination>
    </section>
  );
}

export default BookSection;