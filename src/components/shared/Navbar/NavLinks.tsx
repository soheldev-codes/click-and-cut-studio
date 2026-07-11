"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants/navigation";
import { cn } from "@/utils/cn";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {NAV_LINKS.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative text-sm font-medium transition-colors duration-300 text-black",
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