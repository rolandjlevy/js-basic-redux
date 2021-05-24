import { $, $$ } from './src/utils.js';
import * as actions from './src/actions.js';
import reducer from './src/reducer.js';
const store = Redux.createStore(reducer);

$('#increment').addEventListener('click', (e) => {
  store.dispatch(actions.incrementCounter());
  renderCounter();
});

$('#decrement').addEventListener('click', (e) => {
  store.dispatch(actions.decrementCounter());
  renderCounter();
});

$('#add-item').addEventListener('click', (e) => {
  if (!$('#item').value.length) return;
  store.dispatch(actions.addItem());
  renderItems();
  $('#item').value = '';
});

function renderCounter() {
  $('#counter').textContent = store.getState().counter;
}

function renderItems() {
  $('#items').innerHTML = '';
  store.getState().items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.content;
    const span = document.createElement('span');
    span.textContent = '×';
    li.appendChild(span);
    span.addEventListener('click', (e) => {
      store.dispatch(actions.deleteItem(item.id));
      e.target.parentNode.remove();
    });
    $('#items').appendChild(li);
  });
}