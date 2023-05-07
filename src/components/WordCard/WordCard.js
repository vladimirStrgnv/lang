import React from 'react';
import styles from './WordCard.module.css';
import { useSelector } from 'react-redux'; 
import api from '../../api/api';

function createMarkup(text) { return {__html: text}; };



const WordCard = (props) => {
  const url =  useSelector((state) => state.baseUrl);
  const auth =  useSelector((state) => state.auth);
  const userId =  useSelector((state) => state.auth.userId)
  console.log(props.wordData)
  return (
    <article className={styles.wordcard}>
      <div className={styles.wordcard__container}>
        <img src={`${url}/${props.wordData.image}`} className={styles['wordcard__img']} alt="advantages img" />
        <div className={styles.wordcard__info}>
          <h2>{props.wordData.word}</h2>
          <p>{props.wordData.wordTranslate}</p>
          <div className={styles['wordcard__transcription-container']}>
            <p>{props.wordData.transcription}</p>
            <img 
              src={require('./assets/volume.png')}
              alt="volume_icon" 
              className={styles.worcard__volume}
              onClick={()=> {new Audio(`${url}/${props.wordData.audio}`).play()}}
            />
          </div>
          <button 
            className={styles['wordcard__add-difficult-btn']}
            onClick={()=> {api.createUserWord(userId, props.wordData.id)}}
            >В СЛОЖНЫЕ СЛОВА
          </button>
          <h3>Значение</h3>
          <p dangerouslySetInnerHTML={createMarkup(props.wordData.textMeaning)}></p>
          <p dangerouslySetInnerHTML={createMarkup(props.wordData.textMeaningTranslate)}></p>
          <h3>Пример</h3>
          <p dangerouslySetInnerHTML={createMarkup(props.wordData.textExample)}></p>
          <p dangerouslySetInnerHTML={createMarkup(props.wordData.textExampleTranslate)}></p> 
        </div>
      </div>
    </article>
  )
}

export default WordCard;