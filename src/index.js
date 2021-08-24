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
  const unorderedList = document.createElement('li');

  const checkButton = document.createElement('div');
  checkButton.id = 'checkList';
  checkButton.innerHTML = '<i class="far fa-square"></i>';
  unorderedList.append(checkButton);

  const newToDo = document.createElement('p');
  newToDo.innerText = todoItem.description;
  unorderedList.append(newToDo);

  const moveButton = document.createElement('div');
  moveButton.id = 'moveList';
  moveButton.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
  unorderedList.append(moveButton);
  list.append(unorderedList);
});
