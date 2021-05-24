import * as actions from './actionTypes.js';
import { $ } from './utils.js';

function incrementCounter() {
  return { type: actions.INCREMENT_COUNTER }
}

function decrementCounter() {
  return { type: actions.DECREMENT_COUNTER }
}

function addItem() {
  return {
    type: actions.ADD_ITEM,
    content: $('#item').value
  }
}

function deleteItem(id) {
  return {
    type: actions.DELETE_ITEM,
    id
  }
}

export {
  incrementCounter,
  decrementCounter,
  addItem,
  deleteItem
}