"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

import { NAV_LINKS } from "@/constants/navigation";
import Button from "@/components/ui/button";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

const pathname = usePathname();

useEffect(() => {
  setOpen(false);
}, [pathname]);
  


  return (
    <div className="lg:hidden">
      {/* Toggle Button */}
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

      {/* Mobile Menu */}
      {open && (
        <div className="absolute left-0 top-20 w-full border-b border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
          <nav className="flex flex-col p-6">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="mt-5"
            >
              <Button className="w-full">Login</Button>
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}