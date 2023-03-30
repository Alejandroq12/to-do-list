import TaskElement from './taskElement.js';

class ToDoStructure {
  constructor(tasks) {
    this.tasks = tasks;
  }

  create() {
    const main = document.createElement('main');
    main.id = 'todo-list__div';

    main.appendChild(this.createTodoDateDiv());
    main.appendChild(this.createTodoDivPlaceholder());
    main.appendChild(this.createTodoListDiv());
    main.appendChild(this.createBtnDiv());

    return main;
  }

  // eslint-disable-next-line class-methods-use-this
  createTodoDateDiv() {
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

  // eslint-disable-next-line class-methods-use-this
  createTodoDivPlaceholder() {
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
  createBtnDiv() {
    const btnDiv = document.createElement('div');
    btnDiv.className = 'btn';

    const btnP = document.createElement('button');
    btnP.className = 'btn-p';
    btnP.textContent = 'Clear all completed';
    btnDiv.appendChild(btnP);

    return btnDiv;
  }
}

export default ToDoStructure;
