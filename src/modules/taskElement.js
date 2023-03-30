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

    return listItem;
  }
}

export default TaskElement;
