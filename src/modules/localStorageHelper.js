export function getTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks !== null && storedTasks !== 'undefined') {
    return JSON.parse(storedTasks);
  }
  localStorage.setItem('tasks', JSON.stringify([]));
  return [];
}

export default getTasksFromLocalStorage;