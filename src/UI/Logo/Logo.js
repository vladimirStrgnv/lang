import React from 'react';
import styles from './Logo.module.css';
import { Link } from 'react-router-dom';
import MainPage from '../../pages/main';


const Logo = () => {
  return (
    <Link path='/' element={<MainPage></MainPage>}><div className={styles.logo}>Lang.</div></Link>
  )
}

export default Logo