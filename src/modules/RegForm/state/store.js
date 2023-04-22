import { useReducer } from 'react';
import validators from '../helpers/validators';

const formState = {
  email: {
    value: '',
    isValid: false,
    noValidTxt: 'Некорректный адресс почты'
  },
  name: {
    value: '',
    isValid: false,
    noValidTxt: 'Имя содержит меньше 5 символов'
  },
  password: {
    value: '',
    isValid: false,
    noValidTxt: 'Пароль меньше 8 символов'
  },
  repeatPassword: {
    value: '',
    isValid: false,
    noValidTxt: 'Не соответствует введенному паролю'
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_EMAIL":
      return { ...state, email: {
        ...state.email, 
        value: action.value,
        isValid: validators.checkEmail(action.value)
      } };
    case "CHANGE_NAME":
      return { ...state, name: {
        ...state.name, 
        value: action.value,
        isValid: validators.checkNameLength(action.value)
      } };
    case "CHANGE_PASS":
      return { ...state, password: {
        ...state.password, 
        value: action.value,
        isValid: validators.checkPassLength(action.value)
      } };
    case "CHANGE_CONFIRM-PASS":
      return { ...state, repeatPassword: {
        ...state.repeatPassword, 
        value: action.value,
        isValid: action.value === state.password.value
      } };
    default:
      return state;
  }
}

const useCreateStore = () => {
  const [state, dispatch] = useReducer(reducer, formState);
  const dispatchGenerator = (eventName) => {
    return function (e) {
      dispatch({
        type: eventName, 
        value: e.target.value
      })
    }
  }
  const emailDispatch = dispatchGenerator('CHANGE_EMAIL');
  const nameDispatch = dispatchGenerator('CHANGE_NAME');
  const passDispatch = dispatchGenerator('CHANGE_PASS');
  const confirmPassDispatch = dispatchGenerator('CHANGE_CONFIRM-PASS');

  return {emailDispatch, nameDispatch, passDispatch, confirmPassDispatch, state};
}

export default useCreateStore;