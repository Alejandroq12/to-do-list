import TaskElement from './taskElement.js';
import { getTasksFromLocalStorage } from './localStorageHelper.js';
import { clearCompletedTasks } from './statusUpdates.js';
import { updateTaskIndexes } from './updateIndexes.js';

class ToDoStructure {
  constructor(tasks, populateTasksFunc) {
    this.tasks = tasks;
    this.populateTasks = populateTasksFunc;
    this.updateTasks = (newTasks) => {
      this.tasks.length = 0;
      newTasks.forEach((task) => this.tasks.push(task));
    };
  }

  create() {
    const main = document.createElement('main');
    main.id = 'todo-list__div';

    main.appendChild(ToDoStructure.createTodoDateDiv());
    main.appendChild(ToDoStructure.createTodoDivPlaceholder());
    main.appendChild(this.createTodoListDiv());
    main.appendChild(this.createBtnDiv(this.populateTasks));

    return main;
  }

  static createTodoDateDiv() {
    const todoDateDiv = document.createElement('div');
    todoDateDiv.className = 'todo-date';

    const todoDateP = document.createElement('p');
    todoDateP.className = 'todo-date__p';
    todoDateP.textContent = "Today's To Do";
    todoDateDiv.appendChild(todoDateP);

    const loadingIcon = document.createElement('span');
    loadingIcon.className = 'loading-icon';
    todoDateDiv.appendChild(loadingIcon);

    return todoDateDiv;
  }

  static createTodoDivPlaceholder() {
    const todoDivPlaceholder = document.createElement('div');
    todoDivPlaceholder.className = 'todo-div__placeholder';

    const newTaskInput = document.createElement('input');
    newTaskInput.id = 'new-task';
    newTaskInput.type = 'text';
    newTaskInput.placeholder = 'Add to your list...';
    todoDivPlaceholder.appendChild(newTaskInput);

    const arrowIcon = document.createElement('span');
    arrowIcon.className = 'arrow';
    todoDivPlaceholder.appendChild(arrowIcon);

    return todoDivPlaceholder;
  }

  createTodoListDiv() {
    const todoListDiv = document.createElement('div');
    todoListDiv.className = 'todo-list';

    const todosUl = document.createElement('ul');
    todosUl.className = 'todos-ul';
    this.tasks
      .sort((a, b) => a.index - b.index)
      .forEach((task) => {
        const taskElement = new TaskElement(task);
        todosUl.appendChild(taskElement.create());
      });
    todoListDiv.appendChild(todosUl);

    return todoListDiv;
  }

  // eslint-disable-next-line class-methods-use-this
  createBtnDiv(populateTasksFunc) {
    const btnDiv = document.createElement('div');
    btnDiv.className = 'btn';
    const btnP = document.createElement('button');
    btnP.className = 'btn-p';
    btnP.textContent = 'Clear all completed';
    btnDiv.appendChild(btnP);
    btnP.addEventListener('click', () => {
      const tasks = getTasksFromLocalStorage();
      const updatedTasks = clearCompletedTasks(tasks);
      updateTaskIndexes(updatedTasks);
      populateTasksFunc(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      this.updateTasks(updatedTasks); // Update the tasks array
    });
    return btnDiv;
  }
}

export default ToDoStructure;