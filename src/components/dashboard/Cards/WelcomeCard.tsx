"use client";

import { HiSparkles } from "react-icons/hi2";
import { useSession } from "@/lib/auth-client";

export default function WelcomeCard() {
  const { data } = useSession();

  const user = data?.user;

  return (
    <section className="relative overflow-hidden rounded-3xl border border-violet-200/50 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 p-8 text-white shadow-xl">
      <div className="relative z-10">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
          <HiSparkles className="text-3xl" />
        </div>

        <p className="text-sm text-white/80">
          Welcome back,
        </p>

        <h2 className="mt-1 text-3xl font-bold">
          {user?.name || "Photographer"} 👋
        </h2>

        <p className="mt-3 max-w-xl text-white/80">
          Manage your bookings, upload galleries, deliver videos and keep
          every client organized from one dashboard.
        </p>
      </div>

      <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-14 left-10 h-36 w-36 rounded-full bg-fuchsia-400/20 blur-3xl" />
    </section>
  );
}