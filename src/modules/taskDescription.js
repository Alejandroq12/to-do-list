export function updateTaskDescription(tasks, taskIndex, newDescription) {
  const newTasks = [...tasks];
  // Find the task with the given index
  const index = newTasks.findIndex((task) => task.index === taskIndex);
  // Check if the index is valid and if the new description is different from the old one
  if (index !== -1 && newTasks[index].description !== newDescription.trim()) {
    // Update the description of the task at the given index
    newTasks[index].description = newDescription.trim();
  }
  return newTasks;
}
export default updateTaskDescription;