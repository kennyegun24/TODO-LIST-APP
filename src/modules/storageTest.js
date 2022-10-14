import localStorageMock from '../__mock__/storageMock.js';

export default class Tasks {
  constructor() {
    this.list = [];
  }

  addTodo(todo) {
    this.list.push(todo);
    localStorageMock.data = this.list;
  }

  removeTodo(ids) {
    const rem = this.list.filter((todo) => todo.ids !== ids);
    rem.forEach((remm, index) => {
      remm.index = index + 1;
    });
    this.list = rem;
    localStorageMock.data = this.list;
  }
}