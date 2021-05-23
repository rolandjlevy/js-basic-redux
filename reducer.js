import * as actions from './actionTypes.js';

const initialState = {
  counter: 0
}

let lastId = 0;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.INCREMENT_COUNTER:
      return {
        ...state,
        counter: ++lastId
      }
    case actions.DECREMENT_COUNTER:
      return {
        ...state,
        counter: --lastId
      }
    default:
      return state;
  }
}