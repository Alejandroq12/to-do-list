export function updateTaskIndexes(tasks) {
  // Update indexes for all remaining tasks
  const taskList = document.querySelector('.todos-ul');
  const remainingTasks = taskList.querySelectorAll('.task-item');
  remainingTasks.forEach((task, index) => {
    task.dataset.index = index + 1;
    task.taskElement.task.index = index + 1; // Update the TaskElement instance
    const checkbox = task.querySelector('input[type=checkbox]');
    checkbox.name = `task-${index + 1}`;
    const label = task.querySelector('.task-text');
    label.setAttribute('for', `task-${index + 1}`);
  });

  // Update tasks in local storage
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
export default updateTaskIndexes;
