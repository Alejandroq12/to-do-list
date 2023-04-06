import { getTasksFromLocalStorage } from './localStorageHelper.js';
import { updateTaskIndexes } from './updateIndexes.js';
import { toggleTaskCompletion } from './statusUpdates.js';
import { updateTaskDescription } from './taskDescription.js'; // Import the function

class TaskElement {
  constructor(task, tasks) {
    this.task = task;
    this.tasks = tasks;
    this.element = null;
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
    taskText.innerText = this.task.description; // Keep this line here
    listItem.appendChild(taskText);

    const eraseIcon = document.createElement('span');
    eraseIcon.className = 'erase-icon';
    eraseIcon.innerHTML = '❌';
    eraseIcon.style.display = 'none';
    listItem.appendChild(eraseIcon);

    const threeDotsIcon = document.createElement('span');
    threeDotsIcon.className = 'three-dots-icon';
    listItem.appendChild(threeDotsIcon);

    listItem.addEventListener('mouseover', () => {
      eraseIcon.style.display = 'inline-block';
      threeDotsIcon.style.display = 'inline-block';
      listItem.style.backgroundColor = 'lightgray';
      taskText.contentEditable = 'true';
    });

    taskText.addEventListener('blur', () => {
      const newDescription = taskText.innerText;
      if (newDescription !== this.task.description) {
        const tasks = getTasksFromLocalStorage();
        const updatedTasks = updateTaskDescription(tasks, this.task.index, newDescription);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        this.task.description = newDescription;
      }
    });

    listItem.addEventListener('mouseout', () => {
      eraseIcon.style.display = 'none';
      listItem.style.backgroundColor = '';
      taskText.contentEditable = 'false';
    });

    checkbox.addEventListener('change', () => {
      const tasks = getTasksFromLocalStorage();
      const index = tasks.findIndex((task) => task.index === this.task.index);
      if (index !== -1) {
        toggleTaskCompletion(tasks[index], tasks);
      }
    });

    return listItem;
  }
}

export default TaskElement;