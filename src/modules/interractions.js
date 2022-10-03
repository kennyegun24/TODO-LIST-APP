/* eslint-disable */
import { todos } from '../index';
/* eslint-enable */

export const trueFalse = () => {
  const checkBox = Array.from(document.querySelectorAll('.checkBox'));
  checkBox.forEach((complete) => {
    const ind = checkBox.indexOf(complete);
    complete.addEventListener('change', () => {
      if (!complete.checked) {
        complete.nextElementSibling.style.textDecoration = 'none';
        complete.nextElementSibling.style.opacity = '1';
        complete.value = false;
        todos[ind].completed = false;
      } else {
        complete.nextElementSibling.style.textDecoration = 'line-through';
        complete.nextElementSibling.style.opacity = '0.5';
        complete.value = true;
        todos[ind].completed = true;
      }
      localStorage.setItem('todos', JSON.stringify(todos));
    });
  });
};

export const del = () => {
  Array.from(document.querySelectorAll('.checkBox')).forEach((complete) => {
    if (complete.checked) {
      complete.parentElement.remove();
    }
  });
};
