"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useSession } from "@/lib/auth-client";
import {
  ADMIN_EMAILS,
  ADMIN_NAV_LINKS,
  CLIENT_NAV_LINKS,
  PUBLIC_NAV_LINKS,
} from "@/constants/navigation";
import { cn } from "@/utils/cn";

export default function NavLinks() {
  const pathname = usePathname();

  const { data: session } = useSession();

  const isAdmin = session?.user?.email
    ? ADMIN_EMAILS.includes(session.user.email as (typeof ADMIN_EMAILS)[number])
    : false;

  const links = [
    ...PUBLIC_NAV_LINKS,
    ...(session
      ? isAdmin
        ? ADMIN_NAV_LINKS
        : CLIENT_NAV_LINKS
      : []),
  ];

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {links.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative text-sm font-medium transition-colors duration-300",
              active
                ? "text-violet-600"
                : "text-zinc-700 hover:text-violet-600 dark:text-zinc-300"
            )}
          >
            {item.label}

            {active && (
              <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-violet-600" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}