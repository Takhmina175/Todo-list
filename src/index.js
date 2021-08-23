import './style.css';

const button = document.querySelector('.fa-reply');
button.addEventListener('click', () => {
  console.log('Lets drink coffee');
});
const listToDo = [
  {
    completed: true,
    description: 'Drink a coffee',
    index: 0,
  },
  {
    completed: false,
    description: 'Do JavaScript project',
    index: 1,
  },
];
const list = document.querySelector('#todo-list');
listToDo.forEach((todoItem) => {
  const newToDo = document.createElement('li');
  newToDo.innerHTML = '<i class="far fa-square"></i>';
  newToDo.innerText = todoItem.description;
  list.append(newToDo);
});
