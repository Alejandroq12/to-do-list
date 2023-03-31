import './style.css';
import { updateTaskIndexes } from './modules/updateIndexes.js';
import addTask from './modules/addTask.js';
import { getTasksFromLocalStorage } from './modules/localStorageHelper.js';
import TaskElement from './modules/taskElement.js';
import ToDoStructure from './modules/ToDoStructure.js';

export function populateTasks(tasks) {
  const todoList = document.querySelector('.todos-ul');

  // Clear the current task list elements
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }

  tasks.forEach((task) => {
    const taskElement = new TaskElement(task);
    todoList.appendChild(taskElement.create());
  });
}

const tasks = getTasksFromLocalStorage();
const toDoStructure = new ToDoStructure(tasks, populateTasks).create();
document.getElementById('todo-list-placeholder').appendChild(toDoStructure);
populateTasks(tasks); // Call the function with tasks argument

window.addEventListener('DOMContentLoaded', () => {
  updateTaskIndexes(tasks);
});

const input = document.getElementById('new-task');
input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const inputValue = input.value.trim();
    if (inputValue !== '') {
      addTask(tasks, inputValue, populateTasks);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      input.value = '';
    }
  }
});

function eraseTaskFromView(taskElement) {
  taskElement.deleteTask();
}

const todoList = document.querySelector('.todos-ul');

todoList.addEventListener('click', (event) => {
  if (event.target.classList.contains('erase-icon')) {
    event.stopPropagation();
    const listItem = event.target.parentElement;
    const { taskElement } = listItem;
    eraseTaskFromView(taskElement);

    // Update the tasks array
    const taskIndex = tasks.findIndex((task) => task.index === taskElement.task.index);
    if (taskIndex > -1) {
      tasks.splice(taskIndex, 1);
      updateTaskIndexes(tasks);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    // Remove the listItem directly from the DOM without repopulating the entire list
    listItem.remove();
  }
});

export default populateTasks;