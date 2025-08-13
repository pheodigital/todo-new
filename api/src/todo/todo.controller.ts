import { Request, Response } from "express";
import { TodoService } from "./todo.service.js";

const getUserId = (req: Request) => {
  // For MVP: fixed demo user; replace with real auth later
  return "demo-user";
};

export const TodoController = {
  list: async (req: Request, res: Response) => {
    const userId = getUserId(req);
    const todos = await TodoService.list(userId);
    res.json(todos);
  },
  create: async (req: Request, res: Response) => {
    const userId = getUserId(req);
    const todo = await TodoService.create(userId, req.body);
    res.status(201).json(todo);
  },
  update: async (req: Request, res: Response) => {
    const todo = await TodoService.update(req.params.id, req.body);
    res.json(todo);
  },
  delete: async (req: Request, res: Response) => {
    await TodoService.delete(req.params.id);
    res.status(204).send();
  },
};
