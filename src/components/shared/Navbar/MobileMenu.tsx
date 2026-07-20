"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiOutlineBars3,
  HiOutlineXMark,
} from "react-icons/hi2";

import {
  ADMIN_EMAILS,
  ADMIN_NAV_LINKS,
  CLIENT_NAV_LINKS,
  PUBLIC_NAV_LINKS,
} from "@/constants/navigation";

import { useSession } from "@/lib/auth-client";
import Button from "@/components/ui/button";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const { data: session } = useSession();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isAdmin = session?.user?.email
    ? ADMIN_EMAILS.includes(
        session.user.email as (typeof ADMIN_EMAILS)[number]
      )
    : false;

  const links = useMemo(() => {
    return [
      ...PUBLIC_NAV_LINKS,
      ...(session
        ? isAdmin
          ? ADMIN_NAV_LINKS
          : CLIENT_NAV_LINKS
        : []),
    ];
  }, [session, isAdmin]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-xl p-2 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
      >
        {open ? (
          <HiOutlineXMark className="text-2xl" />
        ) : (
          <HiOutlineBars3 className="text-2xl" />
        )}
      </button>

      {open && (
        <div className="absolute left-0 top-20 w-full border-b border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
          <nav className="flex flex-col p-6">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                {item.label}
              </Link>
            ))}

            {!session && (
              <Link href="/login" className="mt-5">
                <Button className="w-full">
                  Login
                </Button>
              </Link>
            )}
          </nav>
        </div>
      )}
    </div>
  );
}