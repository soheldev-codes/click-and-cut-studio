"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HiOutlineEnvelope, HiOutlineUser } from "react-icons/hi2";

import { getProfile } from "@/services/profile.service";

type User = {
  id: string;
  name: string;
  email: string;
  image?: string;
  createdAt?: string | Date;
};
export default function ProfileCard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      try {
        const data = await getProfile();
        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  if (loading) {
    return (
      <div className="rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="animate-pulse space-y-5">
          <div className="mx-auto h-28 w-28 rounded-full bg-zinc-200 dark:bg-zinc-700" />
          <div className="mx-auto h-6 w-48 rounded bg-zinc-200 dark:bg-zinc-700" />
          <div className="mx-auto h-4 w-64 rounded bg-zinc-200 dark:bg-zinc-700" />
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="rounded-3xl border border-dashed p-12 text-center">
        Profile not found.
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex flex-col items-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-violet-500">
          <Image
            src={user.image || "/default-avatar.png"}
            alt={user.name}
            fill
            className="object-cover"
          />
        </div>

        <h2 className="mt-6 text-3xl font-bold">
          {user.name}
        </h2>

        <p className="mt-2 flex items-center gap-2 text-zinc-500">
          <HiOutlineEnvelope />
          {user.email}
        </p>

        <span className="mt-5 rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
          {user.name}
        </span>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border p-5 dark:border-zinc-800">
          <p className="text-sm text-zinc-500">
            Full Name
          </p>

          <h3 className="mt-2 flex items-center gap-2 text-lg font-semibold">
            <HiOutlineUser />
            {user.name}
          </h3>
        </div>

        <div className="rounded-2xl border p-5 dark:border-zinc-800">
          <p className="text-sm text-zinc-500">
            Joined
          </p>

          <h3 className="mt-2 text-lg font-semibold">
            {user.createdAt
              ? new Date(user.createdAt).toLocaleDateString()
              : "N/A"}
          </h3>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-700">
          Edit Profile
        </button>
      </div>
    </div>
  );
}