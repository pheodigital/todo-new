import { TodoService } from "./todo.service.js";
const getUserId = (req) => {
    // For MVP: fixed demo user; replace with real auth later
    return "demo-user";
};
export const TodoController = {
    list: async (req, res) => {
        const userId = getUserId(req);
        const todos = await TodoService.list(userId);
        res.json(todos);
    },
    create: async (req, res) => {
        const userId = getUserId(req);
        const todo = await TodoService.create(userId, req.body);
        res.status(201).json(todo);
    },
    update: async (req, res) => {
        const todo = await TodoService.update(req.params.id, req.body);
        res.json(todo);
    },
    delete: async (req, res) => {
        await TodoService.delete(req.params.id);
        res.status(204).send();
    },
};
