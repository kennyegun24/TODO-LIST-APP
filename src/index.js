import './style.css';
import { clear } from './modules/clearUi';
/* eslint-disable */
import { deleteItems, trueFalse } from './modules/interractions';
/* eslint-enable */

const form = document.querySelector('form');
const input = document.querySelector('.input');
const todoContainer = document.querySelector('.todoContainer');
let todo;
/* eslint-disable */
export let todos = JSON.parse(localStorage.getItem('todos')) || [];
/* eslint-enable */
const store = () => {
  todo = {
    Description: input.value,
    id: todos.length,
    completed: false,
  };
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
};

const removeBook = (id) => {
  todos = todos.filter((books) => books.id !== id);
  todos.forEach((todo, id) => {
    todo.id = id;
  });
  localStorage.setItem('todos', JSON.stringify(todos));
};

const addTask = (todo) => {
  const ul = document.createElement('div');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.value = todo.completed;
  checkBox.checked = todo.completed;
  checkBox.classList.add('checkBox');

  const newInp = document.createElement('input');
  newInp.type = 'text';
  newInp.classList.add('newInput');
  newInp.value = todo.Description;
  if (checkBox.checked) {
    newInp.style.textDecoration = 'line-through';
    newInp.style.opacity = '0.5';
  }
  const icon = document.createElement('i');
  icon.classList.add('fa-solid');
  icon.classList.add('fa-ellipsis-vertical');
  icon.classList.add('dots');

  const hr = document.createElement('hr');

  ul.append(checkBox, newInp, icon, hr);

  todoContainer.append(ul);

  newInp.addEventListener('focusin', () => {
    icon.classList.add('fa-trash');
    icon.classList.add('bin');
    icon.classList.remove('drag');
    icon.classList.remove('fa-ellipsis-vertical');
    icon.addEventListener('click', () => {
      icon.parentElement.remove();
      removeBook(todo.id);
    });
  });
  newInp.addEventListener('focusout', () => {
    icon.classList.remove('fa-trash');
    icon.classList.add('fa-ellipsis-vertical');
    icon.classList.add('drag');
  });
  trueFalse();
  deleteItems();
};
Array.prototype.forEach.call(todos, addTask);

const editTodoList = () => {
  const editInput = document.querySelectorAll('.newInput');
  editInput.forEach((edits, indexed) => {
    edits.addEventListener('change', () => {
      todos.forEach((todo, index) => {
        if (indexed === index) {
          todo.Description = edits.value;
          localStorage.setItem('todos', JSON.stringify(todos));
        }
      });
    });
  });
};
editTodoList();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value !== '') {
    store();
    addTask(todo);
    clear();
  } else {
    alert('Please enter a task');
  }
});
