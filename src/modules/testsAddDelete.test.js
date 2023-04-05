import addTask from './addTask.js';

describe('Add and Delete', () => {
  test('Add function', () => {
    const newTask = {
      description: true,
      completed: false,
      index: 1,
    };
    expect(newTask.length).toEqual(3);
  });
});
