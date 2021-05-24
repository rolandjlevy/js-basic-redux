import * as actionTypes from './actionTypes.js';
import { $ } from './utils.js';

function incrementCounter() {
  return { type: actionTypes.INCREMENT_COUNTER }
}

function decrementCounter() {
  return { type: actionTypes.DECREMENT_COUNTER }
}

function addItem() {
  return {
    type: actionTypes.ADD_ITEM,
    content: $('#item').value
  }
}

function deleteItem(id) {
  return {
    type: actionTypes.DELETE_ITEM,
    id
  }
}

export {
  incrementCounter,
  decrementCounter,
  addItem,
  deleteItem
}