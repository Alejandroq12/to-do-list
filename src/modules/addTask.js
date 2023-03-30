import { createTaskElement } from './todo.js';

const addTask = (tasks, description) => {
  const newTask = {
    description,
    completed: false,
    index: tasks.length,
  };
  tasks.push(newTask);
  const taskList = document.querySelector('.todos-ul');
  const newTaskElement = createTaskElement(newTask);
  taskList.appendChild(newTaskElement);
};
export default addTask;