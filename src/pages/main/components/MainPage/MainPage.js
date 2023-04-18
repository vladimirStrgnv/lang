import React from 'react';
import styles from './MainPage.module.css';
import Greeting from '../Greeting/Greeting';
import Advantages from '../Advantages/Advantages';

const MainPage = () => {
  return (
    <div className={styles.main}>
      <Greeting></Greeting>
      <Advantages></Advantages>
    </div>
  )
}

export default MainPage;