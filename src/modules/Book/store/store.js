import { useReducer } from 'react';

const initialState = {
  section: 0,
  words: [],
  page: 0,
  wordId: '',
  word: {}
}

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_SECTION":
      return { ...state, section: action.value, wordId: '', word:{}};
    case "CHANGE_WORDS":
      return { ...state, words: action.value };
    case "CHANGE_PAGE":
      return { ...state, page: action.value, wordId: '', word:{}};
    case "CHANGE_WORD":
      return { ...state, word: action.value };
    case "CHANGE_WORD_ID":
      return { ...state, wordId: action.value };
    default:
      return state;
  }
}

const useCreateStore = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const sectionDispatch = (value) => {
      dispatch({
        type: 'CHANGE_SECTION', 
        value: value
      })
    }

    const wordsDispatch = (value) => {
      dispatch({
        type: 'CHANGE_WORDS', 
        value: value
      })
    }

    const pageDispatch = (value) => {
      dispatch({
        type: 'CHANGE_PAGE', 
        value: value
      })
    }

    const wordDispatch = (value) => {
      dispatch({
        type: 'CHANGE_WORD', 
        value: value
      })
    }

    const wordIdDispatch = (value) => {
      dispatch({
        type: 'CHANGE_WORD_ID', 
        value: value
      })
    }

  
    return {sectionDispatch, wordsDispatch, pageDispatch, wordDispatch, wordIdDispatch,  state};
}
  
export default useCreateStore;
  