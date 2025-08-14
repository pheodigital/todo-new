import { z } from "zod";
export const createTodoSchema = z.object({
    title: z.string().min(1),
    notes: z.string().optional(),
    dueAt: z.string().datetime().optional(),
    labels: z.array(z.string()).optional(),
});
export const updateTodoSchema = createTodoSchema.partial().extend({
    completed: z.boolean().optional(),
});
