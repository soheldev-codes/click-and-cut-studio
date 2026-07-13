"use client";

import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { DASHBOARD_MENU } from "@/constants/dashboard";

type MobileSidebarProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileSidebar({
  open,
  onClose,
}: MobileSidebarProps) {
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
        <div className="flex h-20 items-center border-b border-zinc-200 px-6 dark:border-zinc-800">
          <Logo />
        </div>

        <nav className="space-y-2 p-4">
          {DASHBOARD_MENU.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
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