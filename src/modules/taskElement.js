class TaskElement {
  constructor(task) {
    this.task = task;
  }

  create() {
    const listItem = document.createElement('li');
    listItem.dataset.index = this.task.index;
    listItem.classList.add('task-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = this.task.completed;
    listItem.appendChild(checkbox);

    const taskText = document.createTextNode(
      `${this.task.description} (${this.task.completed ? 'completed' : 'incomplete'})`,
    );
    listItem.appendChild(taskText);

    const eraseIcon = this.createEraseIcon();
    eraseIcon.style.display = 'none'; // hide erase icon by default
    listItem.appendChild(eraseIcon);

    const threeDotsIcon = document.createElement('span');
    threeDotsIcon.className = 'three-dots-icon';
    listItem.appendChild(threeDotsIcon);

    threeDotsIcon.addEventListener('click', () => {
      threeDotsIcon.style.display = 'none'; // hide three dots icon
      eraseIcon.style.display = 'inline-block'; // show erase icon
    });

    eraseIcon.addEventListener('click', () => {
      this.deleteTask();
    });

    return listItem;
  }

  // eslint-disable-next-line class-methods-use-this
  createEraseIcon() {
    const eraseIcon = document.createElement('span');
    eraseIcon.className = 'erase-icon';
    eraseIcon.innerHTML = '&times;';
    return eraseIcon;
  }

  deleteTask() {
    const listItem = document.querySelector(`li[data-index='${this.task.index}']`);
    listItem.remove();
  }
}

export default TaskElement;
