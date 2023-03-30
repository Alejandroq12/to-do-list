import './style.css';

import { createToDoStructure } from './modules/todo.js';
import addTask from './modules/addTask.js';

const tasks = [];

function populateTasks() {
  const placeholder = document.getElementById('todo-list-placeholder');
  const toDoStructure = createToDoStructure(tasks);
  placeholder.appendChild(toDoStructure);

  const input = document.getElementById('new-task');
  input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      const inputValue = input.value.trim();
      if (inputValue !== '') {
        addTask(tasks, inputValue);
        input.value = '';
      }
    }
  });
  const todoList = document.querySelector('.todos-ul');
  todoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-icon')) {
      const listItem = event.target.parentElement;
      const index = parseInt(listItem.dataset.index, 10);
      tasks.splice(index, 1);
      listItem.remove();
    }
  });
}

window.addEventListener('DOMContentLoaded', populateTasks);
