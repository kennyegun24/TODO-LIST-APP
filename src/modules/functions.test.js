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
    const todoEditVal = document.querySelector('.text');

    expect(todoEditVal.value).toMatch('kenny');

    const Description_1 = 'random';
    todoEditVal.value = Description_1;
    task.editTodo(todoEditVal.id, Description_1);

    expect(todoEditVal.value).toMatch('random');
    expect(localStorageMock.data[0].description).toMatch(Description_1);
  });

  // complete status
  test('Todo list should be marked as completed TRUE', () => {
    const todoCheck_box = document.querySelector('.checked');

    expect(todoCheck_box.checked).toBeFalsy();
    todoCheck_box.checked = true;
    task.isCompletedStatus(todoCheck_box.id, todoCheck_box.checked);

    expect(localStorageMock.data[0].completed).toBeTruthy();
    expect(todoCheck_box.checked).toBeTruthy();
  });

  // clear all checked taks
  test('Clear all checked todo task', () => {
    const clearAll = document.querySelector('.clear-btn');
    clearAll.addEventListener('click', task.clearAllCompletedTask());
    clearAll.click();
    expect(localStorageMock.data.length).toBe(0);
  });
});