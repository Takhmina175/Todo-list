import './style.css';
import {
  CHECK,
  UNCHECK,
  LINE_THROUGH,
  TRASH_ICON,
  LIST,
  completeToDo,
} from './completeToDo';

// select the elements
const list = document.getElementById('todo-list');
const input = document.getElementById('input');
const ELIPSIS = 'fa-ellipsis-v';

// Variables
let index;

function addToDo(description, index, complete) {
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
}

// load items to the user's interface
function loadList(array) {
  array.forEach((item) => {
    addToDo(item.description, item.index, item.complete);
  });
}

// get item from the localStorage
const data = localStorage.getItem('TODO');
if (data) {
  LIST = JSON.parse(data);
  index = LIST.length;
  loadList(LIST);
} else {
  LIST = [];
  index = 0;
}

document.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    const description = input.value;
    if (description) {
      addToDo(description, index, false);
      LIST.push({
        description,
        index,
        complete: false,
      });
      localStorage.setItem('TODO', JSON.stringify(LIST));
      index += 1;
    }
    input.value = '';
  }
});

list.addEventListener('click', (event) => {
  const element = event.target;
  const elementJob = element.attributes.job.value;
  if (elementJob === 'complete') {
    completeToDo(element);
  }
  localStorage.setItem('TODO', JSON.stringify(LIST));
});
