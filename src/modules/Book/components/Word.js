import React from 'react';
import styles from './Word.module.css';

const Word = (props) => {
  return (
    <div className={styles['word-container']}>
        <div>{props.word}</div>
        <div>{props.translate}</div>
    </div>
  )
}

export default Word;