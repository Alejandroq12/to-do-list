import { createTaskElement } from './todo.js';
import TaskElement from './taskElement.js';

const addTask = (tasks, description) => {
  const newTask = {
    description,
    completed: false,
    index: tasks.length,
  };
  tasks.push(newTask);
  const taskList = document.querySelector('.todos-ul');
  const taskElement = new TaskElement(newTask);
  const newTaskElement = createTaskElement(newTask, taskElement);
  taskList.appendChild(newTaskElement);
};

export default addTask;
