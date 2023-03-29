// eslint-disable-next-line no-unused-vars
import { createToDoStructure } from './todo.js';

const tasks = [
  { description: 'Buy groceries', completed: false, index: 1 },
  { description: 'Do laundry', completed: true, index: 0 },
  { description: 'Finish project', completed: false, index: 2 },
];

function populateTasks() {
  const placeholder = document.getElementById('todo-list-placeholder');
  const toDoStructure = createToDoStructure(tasks);
  placeholder.appendChild(toDoStructure);
}

window.addEventListener('DOMContentLoaded', populateTasks);
