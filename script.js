import { incrementCounter, decrementCounter } from './actions.js';
import reducer from './reducer.js';

const store = Redux.createStore(reducer);

const $ = (el) => document.querySelector(el);

$('#increment').addEventListener('click', (e) => {
  store.dispatch(incrementCounter());
  render();
});

$('#decrement').addEventListener('click', (e) => {
  store.dispatch(decrementCounter());
  render();
});

function render() {
  $('#counter').textContent = store.getState().counter;
}