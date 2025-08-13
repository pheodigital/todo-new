import { api } from "@/lib/fetcher";
import { createTodo, toggleTodo, deleteTodo } from "./actions";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

async function getTodos(): Promise<Todo[]> {
  return api("/api/todos");
}

export default async function Page() {
  const todos = await getTodos();

  return (
    <>
      <form
        action={createTodo}
        style={{ display: "flex", gap: 8, marginBottom: 16 }}
      >
        <input
          name="title"
          placeholder="Add a todo…"
          style={{ flex: 1, padding: 8 }}
        />
        <button type="submit">Add</button>
      </form>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "grid",
          gap: 8,
        }}
      >
        {todos.map((t) => (
          <li
            key={t.id}
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              padding: 8,
              border: "1px solid #ddd",
              borderRadius: 8,
            }}
          >
            <form action={async () => toggleTodo(t.id, !t.completed)}>
              <button type="submit" aria-label="toggle">
                {t.completed ? "✅" : "⬜️"}
              </button>
            </form>
            <span
              style={{
                flex: 1,
                textDecoration: t.completed ? "line-through" : "none",
              }}
            >
              {t.title}
            </span>
            <form action={async () => deleteTodo(t.id)}>
              <button type="submit" aria-label="delete">
                🗑️
              </button>
            </form>
          </li>
        ))}
      </ul>
    </>
  );
}
