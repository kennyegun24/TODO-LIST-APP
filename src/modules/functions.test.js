import { localStorageMock, task } from "./addRemove.test.js";

const clearAllChecked = `
<div class="clear-all">
  <a href="" class="clear-btn"></a>
</div>
`;

describe('Todo List operations', () => {
  document.body.insertAdjacentHTML('beforeend', clearAllChecked);
  // Edit todo task value (edit)
  test('Todo list should change from "kenny" to "random"', () => {
    const todoEditValue = document.querySelector('.text');

    expect(todoEditValue.value).toMatch('kenny');

    const newDescription = 'random';
    todoEditValue.value = newDescription;
    task.editTodo(todoEditValue.id, newDescription);

    expect(todoEditValue.value).toMatch('random');
    expect(localStorageMock.data[0].description).toMatch(newDescription);
  });

  // complete status
  test('Todo list should be marked as completed TRUE', () => {
    const todoCheckBox = document.querySelector('.checked');

    expect(todoCheckBox.checked).toBeFalsy();
    todoCheckBox.checked = true;
    task.isCompletedStatus(todoCheckBox.id, todoCheckBox.checked);

    expect(localStorageMock.data[0].completed).toBeTruthy();
    expect(todoCheckBox.checked).toBeTruthy();
  });

  // clear all checked taks
  test('Clear all checked todo task', () => {
    const clearAll = document.querySelector('.clear-btn');
    clearAll.addEventListener('click', task.clearAllCompletedTask());
    clearAll.click();
    expect(localStorageMock.data.length).toBe(0);
  });
});