import { ReactNode } from "react";

export default function ClientLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-5 py-10">
        {children}
      </div>
    </main>
  );
}