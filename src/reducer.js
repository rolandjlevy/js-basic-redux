import * as actionTypes from './actionTypes.js';

let count = 0;
let lastId = 0;

const initialState = {
  counter: count,
  items: [],
  lastId
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        counter: ++count
      }
    case actionTypes.DECREMENT_COUNTER:
      return {
        ...state,
        counter: --count
      }
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items, 
          { id: ++lastId, content:action.content }
        ]
      }
    case actionTypes.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id)
      }
    default:
      return state;
  }
}