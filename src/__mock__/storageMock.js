class localStorageMock {
  static data = [];

  static add(obj) {
    localStorageMock.data.push(obj);
  }
}

export default localStorageMock;