import express, { Request, Response } from 'express';

const router = express.Router();

let todos: string[] = [];

router.get('/', (req: Request, res: Response) => {
  res.json(todos);
});

router.post('/', (req: Request, res: Response) => {
  const todo = req.body.todo;
  todos.push(todo);
  res.status(201).json(todo);
});

router.delete('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  todos = todos.filter((_, index) => index !== id);
  res.status(204).send();
});

export default router;
