let tasks = [];
let nextId = 1;

export function getAllTasks() {
  return tasks;
}

export function addTask(title) {
  const task = { id: nextId++, title };
  tasks.push(task);
  return task;
}

export function deleteTask(id) {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
}
