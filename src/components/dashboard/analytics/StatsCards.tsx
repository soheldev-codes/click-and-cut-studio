"use client";

import { useEffect, useState } from "react";

import {
  HiOutlinePhoto,
  HiOutlineCalendarDays,
  HiOutlineUsers,
  HiOutlineClock,
} from "react-icons/hi2";

import StatsCard from "./StatsCard";
import { getDashboardStats } from "@/services/dashboard.service";

type DashboardStats = {
  totalGalleries: number;
  totalBookings: number;
  totalClients: number;
  pendingBookings: number;
};

export default function StatsCards() {
  const [stats, setStats] =
    useState<DashboardStats | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const data =
          await getDashboardStats();

        setStats(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, []);

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-40 animate-pulse rounded-3xl bg-zinc-200 dark:bg-zinc-800"
          />
        ))}
      </div>
    );
  }

  if (!stats) {
    return null;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatsCard
        title="Total Galleries"
        value={stats.totalGalleries}
        icon={
          <HiOutlinePhoto className="text-3xl" />
        }
      />

      <StatsCard
        title="Total Bookings"
        value={stats.totalBookings}
        icon={
          <HiOutlineCalendarDays className="text-3xl" />
        }
      />

      <StatsCard
        title="Total Clients"
        value={stats.totalClients}
        icon={
          <HiOutlineUsers className="text-3xl" />
        }
      />

      <StatsCard
        title="Pending Bookings"
        value={stats.pendingBookings}
        icon={
          <HiOutlineClock className="text-3xl" />
        }
      />

    </div>
  );
}