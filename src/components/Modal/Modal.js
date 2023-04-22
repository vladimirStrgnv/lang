import React from 'react';
import styles from './Modal.module.css';
import  ReactDOM  from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <>
    <div className={props.modalState.isOpen ? `${styles.modal} ${styles.active}` : `${styles.modal}`} onClick={()=> props.setActive({isOpen: false})}>
        <div className={props.modalState.isOpen ? `${styles.modal__content} ${styles.active}` : `${styles.modal__content}`}>
            {props.modalState.text} 
        </div>
    </div>
    </>,
    document.getElementById('modal')
  )
}

export default Modal;