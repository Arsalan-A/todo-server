import { Request, Response, NextFunction } from 'express';

export function validateTask(req: Request, res: Response) {
  const { title, color, completed } = req.body;

  if (!title || typeof title !== 'string') {
    res.status(400).json({ error: 'Invalid or missing "title"' });
    return;
  }

  if (!color || typeof color !== 'string') {
    res.status(400).json({ error: 'Invalid or missing "color"' });
    return;
  }

  if (completed !== undefined && typeof completed !== 'boolean') {
    res.status(400).json({ error: 'Invalid "completed" value' });
    return;
  }
}
