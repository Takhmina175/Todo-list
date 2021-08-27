import './style.css';
import {
  CHECK, UNCHECK, LINE_THROUGH, TRASH_ICON, listToDo,
  completeToDo
} from './completeToDo.js';

// const LIST_KEY = 'task.listToDo';
// listToDo = JSON.parse(localStorage.getItem(LIST_KEY)) || [];

// add item to the local storage
function save() {
  localStorage.setItem(LIST_KEY, JSON.stringify(listToDo));
}

const list = document.getElementById('todo-list');
const input = document.getElementById('input');

const ELIPSIS = 'fa-ellipsis-v';
let index = 0;
const complete = false;

function addToDo(description, index, complete) {
  input.value = '';
  const DONE = complete ? CHECK : UNCHECK;
  const LINE = complete ? LINE_THROUGH : '';
  const TRASH = complete ? TRASH_ICON : ELIPSIS;
  const item = `<li class="item">
        <i class="far ${DONE} co" job="complete" id="${index}"></i>
        <p class="text ${LINE}">${description}</p>
        <i class="trash fas ${TRASH} " job="delete" id="${index}"></i>
    </li>
    `;
  const position = 'beforeend';
  list.insertAdjacentHTML(position, item); 
   completeToDo(listToDo[index]);
}

document.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    const inputValue = input.value;
    if (inputValue) {
      addToDo(inputValue, index, complete);
      listToDo.push({
        inputValue,
        index,
        complete: false,
      });
      // save();
      index += 1;
    }
  }
});



list.addEventListener('click', (event) => {
  const element = event.target;
  const elementJob = element.attributes.job.value;
  if (elementJob === 'complete') {
    completeToDo(element);
  }
  // save();
});
