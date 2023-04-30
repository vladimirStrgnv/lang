import React, { useState } from 'react';
import styles from './Pagination.module.css';

const Pagination = () => {
  const [currentButton, setCurrentButton] = useState(1);
  const pages = 10;

  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i)
  }

  return (
    <div className={styles['pagination-container']}>
        <a href="#!" 
          onClick = {() => setCurrentButton(prev => prev - 1)}
        >Prev</a>
        {numberOfPages.map(page => {
          return (
            <a href="!#" className={currentButton === page && styles.active}>{page}</a>
          )
        })}
        <a href="#!" 
          onClick = {() => setCurrentButton(prev => prev + 1)}
        >Next</a>
    </div>
  )
}

export default Pagination