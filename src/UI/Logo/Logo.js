import React from 'react';
import styles from './Logo.module.css';
import { Link } from 'react-router-dom';


const Logo = () => {
  return (
    <Link to='/' ><div className={styles.logo}>Lang.</div></Link>
  )
}

export default Logo;