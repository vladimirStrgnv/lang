import { useReducer } from 'react';

const formState = {
    email: {
      value: ''
    },
    password: {
      value: ''
    }
}

function reducer(state, action) {
    switch (action.type) {
      case "CHANGE_EMAIL":
        return { ...state, email: {
          value: action.value
        } };
      case "CHANGE_PASSWORD":
        return { ...state, password: {
          value: action.value,
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
    const nameDispatch = dispatchGenerator('CHANGE_PASSWORD');

  
    return {emailDispatch, nameDispatch, state};
}
  
export default useCreateStore;
  