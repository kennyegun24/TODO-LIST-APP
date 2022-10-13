/** @jest-environment jsdom */

import localStorageMock from '../__mock__/storageMock.js';
import Tasks from './storageTest.js';

const task = new Tasks();

const html = (obj) => {
  const htmlLi = `<li class="task-li">
    <input id="${obj.id}" type="checkbox" class="checked" ${obj.completed}>
    <input id="${obj.id}" type="text" class="text" value="${obj.description}" readonly>
    <button id="${obj.id}" class="trash"></button>
    </li>`;
  return htmlLi;
};

describe('Ading and Removing a function', () => {
  test('adding to do task', () => {
    const mockBody = `
    <ul class="todo-body"></ul>
    `;
    // Object 1
    document.body.insertAdjacentHTML('afterbegin', mockBody);
    const todoBody = document.querySelector('.todo-body');
    const object1 = {
      description: 'Kenny',
      completed: false,
      index: 1,
      id: 1,
    };
    task.addTodo(object1);
    todoBody.insertAdjacentHTML('afterbegin', html(object1));
    const counter = todoBody.children.length;
    expect(localStorageMock.data[0]).toEqual(object1);
    expect(counter).toBe(1);
  });

  test('Delete todo Item', () => {
    const DeleteBtn = document.querySelectorAll('.trash');
    DeleteBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const elem = btn.parentNode;
        elem.remove();
        task.removeTodo(e.target.parentNode.id);
      });
    });
  });
});