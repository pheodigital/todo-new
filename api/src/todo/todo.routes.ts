import { Router } from "express";
import { TodoController } from "./todo.controller.js";
import { asyncHandler } from "../common/http.js";
import { createTodoSchema, updateTodoSchema } from "./todo.validators.js";

const r = Router();

r.get("/", asyncHandler(TodoController.list));
r.post(
  "/",
  asyncHandler((req, res) => {
    req.body = createTodoSchema.parse(req.body);
    return TodoController.create(req, res);
  })
);
r.patch(
  "/:id",
  asyncHandler((req, res) => {
    req.body = updateTodoSchema.parse(req.body);
    return TodoController.update(req, res);
  })
);
r.delete("/:id", asyncHandler(TodoController.delete));

export default r;
