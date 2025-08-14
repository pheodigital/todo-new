"use server";

import { api } from "./lib/fetcher";

export async function createTodo(formData: FormData) {
  const title = String(formData.get("title") || "").trim();
  if (!title) throw new Error("Title is required");
  await api("/backend/todos", {
    method: "POST",
    body: JSON.stringify({ title }),
  });
}

export async function toggleTodo(id: string, completed: boolean) {
  await api(`/backend/todos/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ completed }),
  });
}

export async function deleteTodo(id: string) {
  await api(`/backend/todos/${id}`, { method: "DELETE" });
}
