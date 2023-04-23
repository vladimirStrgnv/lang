import { createStore } from 'redux';

const defaultState = {
  auth: JSON.parse(localStorage.getItem('auth'))
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_AUTH_DATA":
      return {...state, auth: action.auth};
    default:
      return state;
  }

};

const store = createStore(reducer);

export default store;