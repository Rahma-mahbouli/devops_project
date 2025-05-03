import express from 'express';
import taskRoutes from './routes/tasks.js';

const app = express();
app.use(express.json());

// Monte les routes sous le chemin /api/tasks
app.use('/api/tasks', taskRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
