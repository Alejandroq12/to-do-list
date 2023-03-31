import { createTaskElement } from './todo.js';
import TaskElement from './taskElement.js';

const addTask = (tasks, inputValue) => {
  const newTask = {
    description: inputValue,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  const taskList = document.querySelector('.todos-ul');
  const taskElement = new TaskElement(newTask);
  const newTaskElement = createTaskElement(newTask, taskElement);
  taskList.appendChild(newTaskElement);
};

export default addTask;
