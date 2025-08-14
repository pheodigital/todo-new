import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const TodoService = {
    list: (userId) => prisma.todo.findMany({ where: { userId }, orderBy: { createdAt: "desc" } }),
    create: (userId, data) => prisma.todo.create({ data: { ...data, userId } }),
    update: (id, data) => prisma.todo.update({ where: { id }, data }),
    delete: (id) => prisma.todo.delete({ where: { id } }),
};
