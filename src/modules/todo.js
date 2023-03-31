import TaskElement from './taskElement.js';

export const createTaskElement = (task) => {
  const taskElement = new TaskElement(task);
  return taskElement.create();
};

export default createTaskElement;