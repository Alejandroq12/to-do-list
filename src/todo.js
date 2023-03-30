import './style.css';

export function createTaskElement(task) {
  const listItem = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;
  listItem.appendChild(checkbox);

  const taskText = document.createTextNode(
    `${task.description} (${task.completed ? 'completed' : 'incomplete'})`,
  );
  listItem.appendChild(taskText);

  // Add the three-dots icon
  const threeDotsIcon = document.createElement('span');
  threeDotsIcon.className = 'three-dots-icon';
  listItem.appendChild(threeDotsIcon);

  listItem.dataset.index = task.index;
  listItem.classList.add('task-item');
  return listItem;
}

export function createToDoStructure(tasks) {
  const main = document.createElement('main');
  main.id = 'todo-list__div';

  const todoDateDiv = document.createElement('div');
  todoDateDiv.className = 'todo-date';
  const todoDateP = document.createElement('p');
  todoDateP.className = 'todo-date__p';
  todoDateP.textContent = "Today's To Do";
  todoDateDiv.appendChild(todoDateP);

  // Add the loading-icon to the right of Today's Task
  const loadingIcon = document.createElement('span');
  loadingIcon.className = 'loading-icon';
  todoDateDiv.appendChild(loadingIcon);

  const todoDivPlaceholder = document.createElement('div');
  todoDivPlaceholder.className = 'todo-div__placeholder';
  const newTaskInput = document.createElement('input');
  newTaskInput.id = 'new-task';
  newTaskInput.type = 'text';
  newTaskInput.placeholder = 'Add to your list...';
  todoDivPlaceholder.appendChild(newTaskInput);

  // Add the arrow icon to the right of the placeholder
  const arrowIcon = document.createElement('span');
  arrowIcon.className = 'arrow';
  todoDivPlaceholder.appendChild(arrowIcon);

  const todoListDiv = document.createElement('div');
  todoListDiv.className = 'todo-list';
  const todosUl = document.createElement('ul');
  todosUl.className = 'todos-ul';
  tasks.sort((a, b) => a.index - b.index).forEach((task) => {
    todosUl.appendChild(createTaskElement(task));
  });
  todoListDiv.appendChild(todosUl);

  const btnDiv = document.createElement('div');
  btnDiv.className = 'btn';
  const btnP = document.createElement('button');
  btnP.className = 'btn-p';
  btnP.textContent = 'Clear all completed';
  btnDiv.appendChild(btnP);

  main.appendChild(todoDateDiv);
  main.appendChild(todoDivPlaceholder);
  main.appendChild(todoListDiv);
  main.appendChild(btnDiv);

  return main;
}
