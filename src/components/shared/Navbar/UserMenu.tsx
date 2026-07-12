"use client";

import Link from "next/link";
import { HiOutlineUserCircle } from "react-icons/hi2";

import Button from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export default function UserMenu() {
  const { data, isPending } = useSession();

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

  const initials =
    user.name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "U";

  return (
    <>
  <button
    type="button"
    className="rounded-full outline-none transition hover:scale-105"
  >
    <Avatar className="h-11 w-11">
      <AvatarImage
        src={user.image ?? undefined}
        alt={user.name ?? "User"}
      />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  </button>

  <span className="ml-2 text-sm">{user.name}</span>
</>
  );
}