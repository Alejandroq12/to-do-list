import { getTasksFromLocalStorage } from './localStorageHelper.js';
import { updateTaskIndexes } from './updateIndexes.js';

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
    listItem.taskElement = this;

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
    eraseIcon.innerHTML = '🗑️';
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

    taskText.addEventListener('blur', () => {
      const tasks = getTasksFromLocalStorage();
      const index = tasks.findIndex((task) => task.index === this.task.index);
      if (index !== -1) {
        tasks[index].description = taskText.innerText.trim();
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    });

    listItem.addEventListener('mouseout', () => {
      eraseIcon.style.display = 'none';
      listItem.style.backgroundColor = '';
      taskText.contentEditable = 'false';
    });

    return listItem;
  }

  deleteTask() {
    const tasks = getTasksFromLocalStorage();
    const index = tasks.findIndex((task) => task.index === this.task.index);
    if (index !== -1) {
      tasks.splice(index, 1);
      // Update task indexes
      tasks.forEach((task, newIndex) => {
        task.index = newIndex + 1;
      });
      // Update local storage
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    // Remove the list item element from the DOM
    this.listItem.remove();
    updateTaskIndexes(tasks);
  }
}

export default TaskElement;