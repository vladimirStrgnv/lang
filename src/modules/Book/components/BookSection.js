import React, { useEffect, useState } from 'react';
import styles from './Page.module.css';
import Pagination from './Pagination';


const Page = () => {
  console.log(Math.random())
  return (
    <section>
        <h2 className={styles.page__title}>Слова</h2>
        <Pagination></Pagination>
    </section>
  )
}

export default Page;