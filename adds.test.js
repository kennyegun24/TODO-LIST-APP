import { addTask, removeBook } from './src/modules/addRemove';

describe('Ading and Removing a function', () => {
  test('adding to do task', () => {
    expect(addTask).not.toBeNull();
  });

  test('remove a task task', () => {
    expect(removeBook).not.toBeDefined();
  });

  test('remove a task', () => {
    expect(removeBook.parentElement).not.toBe('');
  });
});
