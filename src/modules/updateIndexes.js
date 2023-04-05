export const updateTaskIndexes = (tasks) => {
  // Update indexes for all remaining tasks
  const taskList = document.querySelector('.todos-ul');
  const remainingTasks = taskList.querySelectorAll('.task-item');
  remainingTasks.forEach((task, index) => {
    task.dataset.index = index + 1;
    task.taskElement.task.index = index + 1; // Update the TaskElement instance
  });

  // Update the tasks array
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });

  // Return the updated tasks array
  return tasks;
};
export default updateTaskIndexes;
