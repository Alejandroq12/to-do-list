import './style.css';
import { updateTaskIndexes } from './modules/updateIndexes.js';
import { createToDoStructure } from './modules/todo.js';
import addTask from './modules/addTask.js';
import { getTasksFromLocalStorage } from './modules/localStorageHelper.js';
import TaskElement from './modules/taskElement.js';

function populateTasks(tasks) {
  const placeholder = document.getElementById('todo-list-placeholder');
  tasks.map((task) => new TaskElement(task, populateTasks));
  const toDoStructure = createToDoStructure(tasks, tasks, updateTaskIndexes);
  placeholder.appendChild(toDoStructure);

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

  const todoList = document.querySelector('.todos-ul');

  todoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-icon')) {
      const listItem = event.target.parentElement;
      const { taskElement } = listItem;
      taskElement.deleteTask();
    }
  });
}

const tasks = getTasksFromLocalStorage();
populateTasks(tasks); // Call the function with tasks argument

window.addEventListener('DOMContentLoaded', () => {
  updateTaskIndexes(tasks);
});