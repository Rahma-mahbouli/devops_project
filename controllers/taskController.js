let tasks = [];
let nextId = 1;

export const getTasks = (req, res) => {
  res.json(tasks);
};

export const addTask = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  const task = { id: nextId++, title };
  tasks.push(task);
  res.status(201).json(task);
};

export const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== id);
  res.status(204).send();
};
