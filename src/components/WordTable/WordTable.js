import styles from './WordTable.module.css';

const Word = (props) => {
  return (
    <div 
      className={props.id === props.currentWordId? `${styles['word-container']} ${styles.active}` : `${styles['word-container']}`}
      onClick={()=> props.setCurrentWordId(props.id)}
    >
        <div>{props.word}</div>
        <div>{props.translate}</div>
        <div className={props.difficulty?`${styles.word__circle}  ${styles[props.difficulty]}`: `${styles.word__circle} `}></div>
    </div>
  )
}

export default Word;