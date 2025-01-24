import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { taskRoutes } from './routes/taskRoutes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mount routes
app.use('/tasks', taskRoutes);

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

export { app };
