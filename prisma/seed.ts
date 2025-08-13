import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "demo@todo.app" },
    update: {},
    create: { email: "demo@todo.app", name: "Demo User" },
  });

  await prisma.todo.createMany({
    data: [
      {
        userId: user.id,
        title: "Try the app",
        completed: false,
        labels: ["intro"],
      },
      {
        userId: user.id,
        title: "Build MVP",
        completed: false,
        labels: ["work"],
      },
    ],
  });
}
main().finally(() => prisma.$disconnect());
