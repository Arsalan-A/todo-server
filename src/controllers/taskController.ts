import { Request, Response, NextFunction } from 'express';
import { prisma } from '../prisma';
import { validateTask } from '../validators/taskValidator';

export async function getTasks(req: Request, res: Response) {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
}

export async function createTask(req: Request, res: Response) {
  const { title, color, completed } = req.body;
  console.log('DATA', req.body);
  validateTask(req, res);
  try {
    const newTask = await prisma.task.create({
      data: { title, color, completed },
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
}

export async function updateTask(req: Request, res: Response) {
  validateTask(req, res);
  try {
    const { id } = req.params;
    const { title, color, completed } = req.body;

    const updatedTask = await prisma.task.update({
      where: { id },
      data: { title, color, completed },
    });
    res.json(updatedTask);
  } catch (error) {
    res.status(404).json({ error: 'Failed to update task' });
  }
}

export async function deleteTask(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await prisma.task.delete({
      where: { id },
    });

    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: 'Failed to delete task' });
  }
}
