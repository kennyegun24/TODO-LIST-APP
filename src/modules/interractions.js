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

const clearCompleted = document.querySelector('#clear-completed');

const del = () => {
  Array.from(document.querySelectorAll('.checkBox')).forEach((complete) => {
    if (complete.checked) {
      console.log('cndncki');
      complete.parentElement.remove();
    }
  });
};

export const deleteItems = () => {
  clearCompleted.addEventListener('click', () => {
    const filterAll = todos.filter((item) => item.completed !== true);
    todos.length = 0;
    filterAll.forEach((item) => {
      todos.push(item);
    });
    todos.forEach((todo, id) => {
      todo.id = id;
    });
    localStorage.setItem('todos', JSON.stringify(todos));
    del();
  });
};