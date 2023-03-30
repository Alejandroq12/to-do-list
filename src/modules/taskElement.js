class TaskElement {
  constructor(task) {
    this.task = task;
    this.listItem = this.create();
    this.eraseIcon = this.listItem.querySelector('.erase-icon');
    this.taskText = this.listItem.querySelector('.task-text');
    this.threeDotsIcon = this.listItem.querySelector('.three-dots-icon');
  }

  create() {
    const listItem = document.createElement('li');
    listItem.dataset.index = this.task.index;
    listItem.classList.add('task-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = this.task.completed;
    listItem.appendChild(checkbox);

    const taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.innerText = this.task.description;
    listItem.appendChild(taskText);

    const eraseIcon = document.createElement('span');
    eraseIcon.className = 'erase-icon';
    eraseIcon.innerHTML = '&times;';
    eraseIcon.style.display = 'none';
    listItem.appendChild(eraseIcon);

    const threeDotsIcon = document.createElement('span');
    threeDotsIcon.className = 'three-dots-icon';
    listItem.appendChild(threeDotsIcon);

    listItem.addEventListener('mouseover', () => {
      eraseIcon.style.display = 'inline-block';
      threeDotsIcon.style.display = 'inline-block';
      listItem.style.backgroundColor = 'yellow';
      taskText.contentEditable = 'true';
    });

    listItem.addEventListener('mouseout', () => {
      eraseIcon.style.display = 'none';
      listItem.style.backgroundColor = '';
      taskText.contentEditable = 'false';
    });

    eraseIcon.addEventListener('click', () => {
      this.deleteTask();
    });

    return listItem;
  }

  deleteTask() {
    const listItem = document.querySelector(`li[data-index='${this.task.index}']`);
    listItem.remove();
  }
}

export default TaskElement;
