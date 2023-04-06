import { updateTaskDescription } from './taskDescription.js';
import { toggleTaskCompletion, clearCompletedTasks } from './statusUpdates.js';

describe('Edit test | Update test | Complete test', () => {
  let tasks;

  beforeEach(() => {
    document.body.innerHTML = `
      <ul class="todos-ul">
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
    `;

    tasks = [
      {
        description: 'Task 1',
        completed: false,
        index: 1,
      },
      {
        description: 'Task 2',
        completed: false,
        index: 2,
      },
      {
        description: 'Task 3',
        completed: false,
        index: 3,
      },
    ];
  });

  test('updates the task description based on the given index and new description', () => {
    const updatedTasks = updateTaskDescription(tasks, 2, 'Updated Task 2');

    expect(updatedTasks[1].description).toBe('Updated Task 2');
  });

  test('toggles the completed status of a task', () => {
    const task = { description: 'Task 1', completed: false, index: 1 };
    const task2 = { description: 'Task 2', completed: true, index: 1 };
    toggleTaskCompletion(task);
    toggleTaskCompletion(task2);

    expect(task.completed).toBe(true);
    expect(task2.completed).toBe(false);
  });

  test('removes all completed tasks from the list', () => {
    const tasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: true, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
    ];

    const newTasksArray = clearCompletedTasks(tasks);
    expect(newTasksArray.length).toBe(2);
  });
});
