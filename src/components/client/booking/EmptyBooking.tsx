"use client";

import Link from "next/link";
import { HiOutlineCalendarDays } from "react-icons/hi2";

import Button from "@/components/ui/button";

export default function EmptyBooking() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-300 py-20 text-center dark:border-zinc-700">
      <HiOutlineCalendarDays className="mb-5 text-6xl text-violet-500" />

      <h2 className="text-2xl font-bold">
        No Bookings Yet
      </h2>

      <p className="mt-3 max-w-md text-zinc-500">
        You haven't booked any photography
        session yet.
      </p>

      <Link
        href="/booking"
        className="mt-8"
      >
        <Button>
          Book Now
        </Button>
      </Link>
    </div>
  );
}