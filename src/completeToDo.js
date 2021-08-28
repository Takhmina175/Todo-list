// completeToDo.js
export const CHECK = 'fa-check-square';
export const UNCHECK = 'fa-square';
export const LINE_THROUGH = 'lineThrough';
export const TRASH_ICON = 'fa-trash-alt';
export const LIST = [];

export function completeToDo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH);
  element.parentNode.querySelector('.trash').classList.toggle(TRASH_ICON);
  LIST[element.index] = !LIST[element.index];
}
export default completeToDo;
