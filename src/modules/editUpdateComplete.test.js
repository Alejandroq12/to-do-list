// The function for editing the task description is on taskElement.js - it is called taskText
// The function for updating an items completed status is on statusUpdates.js
// The function for the clear all completed button is on statusUpdates.js
// I am using an event listener wich uses an arrow function

import TaskElement from './taskElement.js';
import { toggleTaskCompletion, clearCompletedTasks } from './statusUpdates.js';

describe('Edit test | Update test | Complete test', () => {
  let tasks;
  let inputValue;
  let taskList;

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
    inputValue = 'Task to be edited';
    taskList = document.querySelector('.todos-ul');
  });

  test('Has to update task description when edited', () => {
    const task = { description: 'Task 1', completed: false, index: 1 };
    const updatedTask = { description: 'New Task Description', completed: false, index: 1 };
    const taskElement = new TaskElement(task, []);
    taskElement.taskText.innerText = updatedTask.description;
    taskElement.taskText.dispatchEvent(new Event('blur'));
    const updatedTasks = JSON.parse(localStorage.getItem('tasks'));

    expect(updatedTasks[0].description).toBe(updatedTask.description);
  });

  test('Has to toggle completed task property (false/true)', () => {
    const task = { description: 'Task 1', completed: false, index: 1 };
    const task2 = { description: 'Task 2', completed: true, index: 1 };
    toggleTaskCompletion(task);
    toggleTaskCompletion(task2);

    expect(task.completed).toBe(true);
    expect(task2.completed).toBe(false);
  });

  test('Clear all completed tasks', () => {
    const tasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: true, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
    ];

    const newTasksArray = clearCompletedTasks(tasks);
    expect(newTasksArray.length).toBe(2);
  });
});
