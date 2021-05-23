import * as actions from './actionTypes.js';

function incrementCounter() {
  return {
    type: actions.INCREMENT_COUNTER
  }
}

function decrementCounter() {
  return {
    type: actions.DECREMENT_COUNTER
  }
}

export {
  incrementCounter,
  decrementCounter
}