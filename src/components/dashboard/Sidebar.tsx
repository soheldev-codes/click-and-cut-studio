"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@/components/shared/Logo";
import { DASHBOARD_MENU } from "@/constants/dashboard";
import { cn } from "@/utils/cn";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-screen w-72 shrink-0 border-r border-zinc-200 bg-white lg:flex lg:flex-col dark:border-zinc-800 dark:bg-zinc-900">
      
      {/* Logo */}
      <div className="flex h-20 items-center border-b border-zinc-200 px-6 dark:border-zinc-800">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {DASHBOARD_MENU.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                active
                  ? "bg-violet-600 text-white shadow-lg"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
              )}
            >
              <Icon className="text-xl" />

              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}