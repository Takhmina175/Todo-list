// completeToDo.js
export const CHECK = 'fa-check-square';
export const UNCHECK = 'fa-square';
export const LINE_THROUGH = 'lineThrough';
export const TRASH_ICON = 'fa-trash-alt';
export const listToDo = [];

export function completeToDo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH);
  element.parentNode.querySelector('.trash').classList.toggle(TRASH_ICON);
  listToDo[element.index].complete = !listToDo[element.index].complete;
}
export default completeToDo;