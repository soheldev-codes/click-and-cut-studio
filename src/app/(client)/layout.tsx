"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { useSession } from "@/lib/auth-client";
import { cn } from "@/utils/cn";

const CLIENT_LINKS = [
  {
    label: "My Gallery",
    href: "/client/gallery",
  },
  {
    label: "My Bookings",
    href: "/client/bookings",
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
  },
];

export default function ClientLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  const { data } = useSession();

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-5 py-10">
        {/* Header */}
        <div className="mb-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h1 className="text-3xl font-bold">
            Welcome back,
            <span className="ml-2 text-violet-600">
              {data?.user?.name ?? "Client"}
            </span>
          </h1>

          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Manage your bookings and view your private galleries.
          </p>

          {/* Navigation */}
          <div className="mt-8 flex flex-wrap gap-3">
            {CLIENT_LINKS.map((item) => {
              const active =
                pathname === item.href ||
                pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-6 py-3 text-sm font-medium transition",
                    active
                      ? "bg-violet-600 text-white shadow-lg"
                      : "border border-zinc-200 bg-white text-zinc-700 hover:border-violet-600 hover:text-violet-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Page Content */}
        {children}
      </div>
    </main>
  );
}