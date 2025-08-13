const base = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";

export async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${base}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
    // Important for server actions: Next.js can run these on the server
    cache: "no-store",
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
