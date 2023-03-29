export function createTaskElement(task) {
  const listItem = document.createElement('li');
  listItem.textContent = `${task.description} (${task.completed ? 'completed' : 'incomplete'})`;
  listItem.dataset.index = task.index;
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

  const todoDivPlaceholder = document.createElement('div');
  todoDivPlaceholder.className = 'todo-div__placeholder';
  const newTaskInput = document.createElement('input');
  newTaskInput.id = 'new-task';
  newTaskInput.type = 'text';
  newTaskInput.placeholder = 'Add to your list...';
  todoDivPlaceholder.appendChild(newTaskInput);

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
  const btnP = document.createElement('p');
  btnP.className = 'btn-p';
  btnP.textContent = 'Clear all completed';
  btnDiv.appendChild(btnP);

  main.appendChild(todoDateDiv);
  main.appendChild(todoDivPlaceholder);
  main.appendChild(todoListDiv);
  main.appendChild(btnDiv);

  return main;
}