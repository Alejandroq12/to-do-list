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
}

window.addEventListener('DOMContentLoaded', populateTasks);
