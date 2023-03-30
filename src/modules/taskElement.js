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

    const threeDotsIcon = document.createElement('span');
    threeDotsIcon.className = 'three-dots-icon';
    listItem.appendChild(threeDotsIcon);

    const deleteIcon = this.createDeleteIcon();
    deleteIcon.style.display = 'none'; // hide delete icon by default
    listItem.appendChild(deleteIcon);

    threeDotsIcon.addEventListener('click', () => {
      deleteIcon.style.display = 'inline-block'; // show delete icon
    });

    deleteIcon.addEventListener('click', () => {
      this.deleteTask();
    });

    return listItem;
  }

  // eslint-disable-next-line class-methods-use-this
  createDeleteIcon() {
    const deleteIcon = document.createElement('span');
    deleteIcon.className = 'delete-icon';
    deleteIcon.innerHTML = '&times;';
    return deleteIcon;
  }

  deleteTask() {
    const listItem = document.querySelector(`li[data-index='${this.task.index}']`);
    listItem.remove();
  }
}

export default TaskElement;
