import addTask from './addTask.js';

beforeEach(() => {
  document.body.innerHTML = `
    <div>
      <ul class="todos-ul"></ul>
    </div>`;
});

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
