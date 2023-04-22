import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import Input from '../../../UI/Input/Input';
import { Link, Navigate  } from 'react-router-dom';
import useCreateStore from '../state/store';
import login from '../api/api';

const LoginForm = () => {
  const [isUserLogin, setStatus] = useState(false);
  const { emailDispatch, nameDispatch, state } = useCreateStore();
  const sendRequest = async (e) => {
    e.preventDefault();
    const { password, email } = state;
    const request = await login({
      password: password.value,
      email: email.value,
    });
    if (request.ok) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };
  return (
    <form className={styles["login-form"]} onSubmit={sendRequest}>
      {isUserLogin && <Navigate to="/book"/>}
      <h2 className={styles["login-form__title"]}>Уже с нами?</h2>
      <h3 className={styles["login-form__subtitle"]}>
        Войди в свой аккаунт Lang!
      </h3>
      <Input
        type="text"
        text="email*"
        className={styles["login-input"]}
        onInput={emailDispatch}
        state={state.email}
      ></Input>
      <Input
        type="text"
        text="password *"
        className={styles["login-input"]}
        onInput={nameDispatch}
        state={state.password}
      ></Input>
      <button className={styles.login__btn}>Войти</button>
      <div className={styles["reg-info"]}>
        <span>Еще не с нами? Тогда </span>
        <Link to="/registration" className={styles["reg-link"]}>
          зарегистрируйся
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;