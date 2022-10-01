import './style.css';
import { clear } from '../modules/clearUi';

const form = document.querySelector('form');
const input = document.querySelector('.input');
const todoContainer = document.querySelector('.todoContainer');
let todo;
let todos = JSON.parse(localStorage.getItem('todos')) || [];
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
  checkBox.classList.add('checkBox');

  const newInp = document.createElement('input');
  newInp.type = 'text';
  newInp.classList.add('newInput');
  newInp.value = todo.Description;

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
};
Array.prototype.forEach.call(todos, addTask);

const trueFalse = () => {
  const checkBox = Array.from(document.querySelectorAll('.checkBox'));
  checkBox.forEach((complete) => {
    const ind = checkBox.indexOf(complete);
    complete.addEventListener('change', () => {
      if (complete.value === 'true') {
        complete.nextElementSibling.style.textDecoration = 'none';
        complete.nextElementSibling.style.opacity = '1';
        complete.nextElementSibling.classList.remove('hey');
        complete.value = false;
        todos[ind].completed = false;
      } else {
        complete.nextElementSibling.style.textDecoration = 'line-through';
        complete.nextElementSibling.style.opacity = '0.5';
        complete.nextElementSibling.classList.add('hey');
        complete.value = true;
        todos[ind].completed = true;
      }
      localStorage.setItem('todos', JSON.stringify(todos));
    });
  });
};
trueFalse();

const clearCompleted = document.querySelector('#clear-completed');
const checkBox = Array.from(document.querySelectorAll('.checkBox'));

const del = () => {
  checkBox.forEach((complete) => {
    if (complete.value === 'true') {
      complete.parentElement.style.display = 'none';
    }
  });
};
clearCompleted.addEventListener('click', () => {
  const filterAll = todos.filter((item) => item.completed !== true);
  todos = filterAll;
  todos.forEach((todo, id) => {
    todo.id = id;
  });
  localStorage.setItem('todos', JSON.stringify(todos));
  del();
});

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
