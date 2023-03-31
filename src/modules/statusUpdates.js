export function toggleTaskCompletion(task, tasks) {
  task.completed = !task.completed;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function clearCompletedTasks(tasks) {
  const taskIndex = tasks.findIndex((task) => task.completed);
  if (taskIndex > -1) {
    tasks.splice(taskIndex, 1);
    return clearCompletedTasks(tasks);
  }
  return tasks;
}