import React, {  useState } from 'react';
import styles from './RegForm.module.css';
import Input from '../../../UI/Input/Input';
import { Link } from 'react-router-dom';
import useCreateStore from '../state/store';
import createUser from '../api/api';
import Modal from '../../../components/Modal/Modal';
import { Navigate } from 'react-router-dom';

const RegForm = () => {
  const [isUserLogin, setStatus] = useState(false);
  const { emailDispatch, nameDispatch, passDispatch, confirmPassDispatch, state } = useCreateStore();
  const [modalState, setModalState] = useState({isOpen: false, text: ''});
  const sendRequest = async (e) => {
    e.preventDefault();
    const {name ,password, email} = state;
    const request = await createUser({name: name.value ,password: password.value, email: email.value});
    if (request.ok) {
      setStatus(true);
    } else {
      setModalState({isOpen: true, text: 'Что-то пошло не так !'});
    }
  };
  return (
    <>
      <form className={styles['reg-form']} onSubmit={sendRequest}>
          {isUserLogin && <Navigate to="/login"/>}
          <h2 className={styles.reg__title}>Зарегистрируйся в Ulearning</h2>
          <h3 className={styles.reg__subtitle}>Изучай английский, используя все возможности приложения!</h3>
          <Input type='email' text='email*' className={styles['reg__input']} onInput={emailDispatch} state={state.email}></Input>
          <Input type='text' text='name*' className={styles['reg__input']} onInput={nameDispatch} state={state.name}></Input>
          <Input type='text' text='password*' className={styles['reg__input']} onInput={passDispatch} state={state.password}></Input>
          <Input type='text' text='accept password*' className={styles['reg__input']} onInput={confirmPassDispatch} state={state.repeatPassword}></Input>
          <button className={styles.reg__btn}>Зарегестрироваться</button>
          <div className={styles['login-info']}>
            <span>Уже с нами? </span>
            <Link to='/login' className={styles['login-link']}>Да, Войти!</Link>
          </div>
      </form>
      <Modal modalState={modalState} setActive={setModalState}></Modal>
    </>
  )
}

export default RegForm;