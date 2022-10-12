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
};

module.exports = addTask
module.exports = removeBook