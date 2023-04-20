import React from 'react';
import styles from './RegForm.module.css';
import Input from '../../../UI/Input/Input';
import { Link } from 'react-router-dom';

const RegForm = () => {
  return (
    <form className={styles['reg-form']}>
        <h2 className={styles.reg__title}>Зарегистрируйся в Ulearning</h2>
        <h3 className={styles.reg__subtitle}>Изучай английский, используя все возможности приложения!</h3>
        <Input type='text' text='email*' className={styles['reg__input']}></Input>
        <Input type='text' text='name*' className={styles['reg__input']}></Input>
        <Input type='text' text='password*' className={styles['reg__input']}></Input>
        <Input type='text' text='accept password*' className={styles['reg__input']}></Input>
        <button className={styles.reg__btn}>Зарегестрироваться</button>
        <div className={styles['login-info']}>
          <span>Уже с нами? </span>
          <Link to='/auth' className={styles['login-link']}>Да, Войти!</Link>
        </div>
    </form>
  )
}

export default RegForm;