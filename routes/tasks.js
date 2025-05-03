import express from 'express';
import {
  getAllTasks,
  addTask,
  deleteTask
} from '../services/taskService.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(getAllTasks());
});

router.post('/', (req, res) => {
  const task = addTask(req.body.title);
  res.status(201).json(task);
});

router.delete('/:id', (req, res) => {
  const success = deleteTask(parseInt(req.params.id));
  if (success) {
    res.status(204).end();
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

export default router;
