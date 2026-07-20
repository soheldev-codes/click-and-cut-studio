"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@/components/shared/Logo";
import { useSession } from "@/lib/auth-client";
import {
  ADMIN_DASHBOARD_MENU,
  CLIENT_DASHBOARD_MENU,
} from "@/constants/dashboard";
import { ADMIN_EMAILS } from "@/constants/navigation";
import { cn } from "@/utils/cn";

type MobileSidebarProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileSidebar({
  open,
  onClose,
}: MobileSidebarProps) {
  const pathname = usePathname();

  const { data: session } = useSession();

  const isAdmin = session?.user?.email
    ? ADMIN_EMAILS.includes(
        session.user.email as (typeof ADMIN_EMAILS)[number]
      )
    : false;

  const menu = isAdmin
    ? ADMIN_DASHBOARD_MENU
    : CLIENT_DASHBOARD_MENU;

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/50 lg:hidden"
      />

      {/* Drawer */}
      <aside className="fixed left-0 top-0 z-50 h-screen w-72 bg-white shadow-xl dark:bg-zinc-900 lg:hidden">
        {/* Logo */}
        <div className="flex h-20 items-center border-b border-zinc-200 px-6 dark:border-zinc-800">
          <Logo />
        </div>

        {/* Navigation */}
        <nav className="space-y-2 p-4">
          {menu.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href ||
              pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
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
    </>
  );
}