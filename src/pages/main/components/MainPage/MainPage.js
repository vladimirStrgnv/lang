import React from 'react';
import styles from './MainPage.module.css';
import Greeting from '../Greeting/Greeting';
import Advantages from '../Advantages/Advantages';
import Header from '../../../../modules/Header/index';
import Footer from '../../../../modules/Footer/index';

const MainPage = () => {
  return (
    <div className={styles.main}>
      <Header></Header>
      <Greeting></Greeting>
      <Advantages></Advantages>
      <Footer></Footer>
    </div>
  )
}

export default MainPage;