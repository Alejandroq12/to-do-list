// import './style.css';
import TaskElement from './taskElement.js';
import ToDoStructure from './ToDoStructure.js';

export const createTaskElement = (task) => {
  const taskElement = new TaskElement(task);
  return taskElement.create();
};

export const createToDoStructure = (tasks) => {
  const toDoStructure = new ToDoStructure(tasks);
  return toDoStructure.create();
};
