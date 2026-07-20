"use client";
import { ADMIN_EMAILS } from "@/constants/navigation";
import Link from "next/link";
import { HiOutlineUserCircle } from "react-icons/hi2";
import {
  HiOutlineArrowRightOnRectangle,
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlinePhoto,
  HiOutlineUser,
} from "react-icons/hi2";
import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";

import { RxDashboard } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import toast from "react-hot-toast";

export default function UserMenu() {
  const { data, isPending } = useSession();

  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const router = useRouter();


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
  function handleEscape(event: KeyboardEvent) {
    if (event.key === "Escape") {
      setOpen(false);
    }
  }

  document.addEventListener("keydown", handleEscape);

  return () => {
    document.removeEventListener("keydown", handleEscape);
  };
}, []);



  if (isPending) {
    return (
      <div className="h-11 w-11 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
    );
  }

  if (!data?.user) {
    return (
      <Link href="/login">
        <Button className="gap-2">
          <HiOutlineUserCircle className="text-lg" />
          Login
        </Button>
      </Link>
    );
  }

  const user = data.user;

  const isAdmin = ADMIN_EMAILS.includes(
  user.email as (typeof ADMIN_EMAILS)[number]
);

  const initials =
    user.name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "U";


      async function handleLogout() {
  try {
    await authClient.signOut();

    setOpen(false);

    toast.success("Logged out successfully");

    router.refresh();

    router.push("/");
  } catch {
    toast.error("Logout failed");
  }
}



  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-full outline-none transition hover:scale-105"
      >
        <Avatar className="h-11 w-11">
          <AvatarImage
            src={user.image ?? undefined}
            alt={user.name ?? "User"}
          />

          <AvatarFallback className="bg-gradient-to-br from-violet-600 to-fuchsia-600 font-semibold text-white">
            {initials}
          </AvatarFallback>
        </Avatar>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-14 z-50 w-72 rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="flex items-center gap-4">
  <Avatar className="h-14 w-14">
    <AvatarImage
      src={user.image ?? undefined}
      alt={user.name ?? "User"}
    />

    <AvatarFallback className="bg-gradient-to-br from-violet-600 to-fuchsia-600 text-base font-semibold text-white">
      {initials}
    </AvatarFallback>
  </Avatar>

  <div className="min-w-0">
    <h3 className="truncate text-base font-semibold text-zinc-900 dark:text-white">
      {user.name}
    </h3>

    <p className="truncate text-sm text-zinc-500 dark:text-zinc-400">
      {user.email}
    </p>
  </div>
</div>

<div className="my-5 border-t border-zinc-200 dark:border-zinc-800" />

<div className="space-y-1">
  {isAdmin && (
    <Link
      href="/admin/dashboard"
      onClick={() => setOpen(false)}
      className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
    >
      <RxDashboard className="text-lg" />
      Admin Dashboard
    </Link>
  )}

  {!isAdmin && (
    <>
      <Link
        href="/client/gallery"
        onClick={() => setOpen(false)}
        className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
      >
        <HiOutlinePhoto className="text-lg" />
        My Gallery
      </Link>

      <Link
        href="/client/bookings"
        onClick={() => setOpen(false)}
        className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
      >
        <HiOutlineCalendarDays className="text-lg" />
        My Bookings
      </Link>
    </>
  )}

  <Link
    href="/dashboard/profile"
    onClick={() => setOpen(false)}
    className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
  >
    <HiOutlineUser className="text-lg" />
    Profile
  </Link>

  <Link
    href="/settings"
    onClick={() => setOpen(false)}
    className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
  >
    <HiOutlineCog6Tooth className="text-lg" />
    Settings
  </Link>
</div>

<div className="my-4 border-t border-zinc-200 dark:border-zinc-800" />

<button
  type="button"
  onClick={handleLogout}
  className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-red-600 transition hover:bg-red-50 dark:hover:bg-red-950/30"
>
  <HiOutlineArrowRightOnRectangle className="text-lg" />
  Logout
</button>


          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

}