import addTask from './addTask.js';

describe('addTask', () => {
  let tasks;
  let inputValue;
  let taskList;

  beforeEach(() => {
    // Set up the mock HTML
    document.body.innerHTML = `
      <ul class="todos-ul">
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
    `;

    // Initialize variables for each test case
    tasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
    ];
    inputValue = 'New Task';
    taskList = document.querySelector('.todos-ul');
  });

  afterEach(() => {
    // Clean up the mock HTML
    document.body.innerHTML = '';
  });

  test('adds exactly one <li> element to the list in the DOM', () => {
    addTask(tasks, inputValue);
    expect(taskList.children.length).toBe(4);
  });

  test('removes exactly one <li> element from the list in the DOM', () => {
    tasks.pop();
    const taskToDelete = taskList.children[2];
    taskList.removeChild(taskToDelete);
    expect(taskList.children.length).toBe(2);
  });
});
