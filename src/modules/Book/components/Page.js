import React, {  useEffect }  from 'react';
import styles from './Page.module.css';
import Api from '../api/api';
import { useDispatch, useSelector } from 'react-redux';


const Page = () => {
  const dispatch = useDispatch();
  const authToken = useSelector(currenTstate => currenTstate.auth.token);
  
  useEffect(  () => {
    const pageWords =  Api.getWords(0, 1);
    console.log(pageWords)
  }, []);
  return (
    <section>
        <h2 className={styles.page__title}>Слова</h2>

    </section>
  )
}

export default Page;