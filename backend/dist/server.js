import express from "express";
import cors from "cors";
import helmet from "helmet";
import todoRoutes from "./todo/todo.routes.js";
const app = express();
app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(express.json());
app.get("/health", (_req, res) => res.json({ ok: true }));
app.use("/backend/todos", todoRoutes);
// simple error handler
app.use((err, _req, res, _next) => {
    console.error(err);
    res.status(400).json({ error: err?.message || "Unknown error" });
});
app.listen(process.env.PORT, () => console.log(`backend listening on http://localhost:${process.env.PORT}`));
