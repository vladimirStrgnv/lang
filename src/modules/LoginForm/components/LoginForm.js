import React from 'react';
import styles from './LoginForm.module.css';
import Input from '../../../UI/Input/Input';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <form className={styles['login-form']}>
        <h2 className={styles['login-form__title']}>Уже с нами?</h2>
        <h3 className={styles['login-form__subtitle']}>Войди в свой аккаунт Lang!</h3>
        <Input type='text' text='email*' className={styles['login-input']}></Input>
        <Input type='text' text='password *' className={styles['login-input']}></Input>
        <button className={styles.login__btn}>Войти</button>
        <div className={styles['reg-info']}>
          <span>Еще не с нами? Тогда </span>
          <Link to='/registration' className={styles['reg-link']}>зарегистрируйся</Link>
        </div>
    </form>
  )
}

export default LoginForm;