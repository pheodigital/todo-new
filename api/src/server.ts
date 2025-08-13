import express from "express";
import cors from "cors";
import helmet from "helmet";
import todoRoutes from "./todo/todo.routes.js";
import { env } from "./config/env.js";

const app = express();
app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use("/api/todos", todoRoutes);

// simple error handler
app.use((err: any, _req: any, res: any, _next: any) => {
  console.error(err);
  res.status(400).json({ error: err?.message || "Unknown error" });
});

app.listen(env.PORT, () =>
  console.log(`API listening on http://localhost:${env.PORT}`)
);
