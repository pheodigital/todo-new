import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const TodoService = {
  list: (userId: string) =>
    prisma.todo.findMany({ where: { userId }, orderBy: { createdAt: "desc" } }),
  create: (userId: string, data: any) =>
    prisma.todo.create({ data: { ...data, userId } }),
  update: (id: string, data: any) =>
    prisma.todo.update({ where: { id }, data }),
  delete: (id: string) => prisma.todo.delete({ where: { id } }),
};
