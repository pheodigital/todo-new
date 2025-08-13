export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        <main style={{ maxWidth: 720, margin: "2rem auto", padding: "0 1rem" }}>
          <h1>Todo</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
