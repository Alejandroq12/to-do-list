export function toggleTaskCompletion(task, tasks) {
  task.completed = !task.completed;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function clearCompletedTasks(tasks) {
  return tasks.filter((task) => !task.completed);
}
