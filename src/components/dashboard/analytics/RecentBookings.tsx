"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

import { getRecentDashboardData } from "@/services/dashboard.service";

type Booking = {
  _id: string;
  clientName: string;
  eventType: string;
  eventDate: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
};

export default function RecentBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getRecentDashboardData();
        setBookings(data.recentBookings);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="animate-pulse space-y-4">
          <div className="h-6 w-44 rounded bg-zinc-200 dark:bg-zinc-700" />
          <div className="h-16 rounded bg-zinc-100 dark:bg-zinc-800" />
          <div className="h-16 rounded bg-zinc-100 dark:bg-zinc-800" />
          <div className="h-16 rounded bg-zinc-100 dark:bg-zinc-800" />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">
            Recent Bookings
          </h2>

          <p className="text-sm text-zinc-500">
            Latest booking requests.
          </p>
        </div>

        <Link
          href="/dashboard/bookings"
          className="flex items-center gap-1 text-sm font-medium text-violet-600 hover:underline"
        >
          View All
          <HiOutlineArrowRight />
        </Link>
      </div>

      {bookings.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-10 text-center text-zinc-500">
          No bookings found.
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="flex items-center justify-between rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800"
            >
              <div>
                <h3 className="font-semibold">
                  {booking.clientName}
                </h3>

                <p className="text-sm text-zinc-500">
                  {booking.eventType}
                </p>

                <p className="mt-1 text-xs text-zinc-400">
                  {booking.eventDate}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${
                  booking.status === "confirmed"
                    ? "bg-green-100 text-green-700"
                    : booking.status === "pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : booking.status === "completed"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {booking.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}