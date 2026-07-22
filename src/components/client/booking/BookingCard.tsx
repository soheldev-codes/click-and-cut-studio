"use client";

import Link from "next/link";
import {
  HiOutlineCalendarDays,
  HiOutlineMapPin,
  HiOutlineCurrencyDollar,
  HiOutlineArrowRight,
} from "react-icons/hi2";

import { Booking } from "@/types/booking";
import BookingStatusBadge from "./BookingStatusBadge";

type BookingCardProps = {
  booking: Booking;
};

export default function BookingCard({
  booking,
}: BookingCardProps) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">
            {booking.eventType} Photography
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            {booking.fullName}
          </p>
        </div>

        <BookingStatusBadge
          status={booking.status}
        />
      </div>

      <div className="mt-6 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
        <div className="flex items-center gap-3">
          <HiOutlineCalendarDays className="text-lg text-violet-600" />
          <span>{booking.eventDate}</span>
        </div>

        <div className="flex items-center gap-3">
          <HiOutlineMapPin className="text-lg text-violet-600" />
          <span>{booking.location}</span>
        </div>

        <div className="flex items-center gap-3">
          <HiOutlineCurrencyDollar className="text-lg text-violet-600" />
          <span>{booking.budget}</span>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Link
          href={`/client/bookings/${booking._id}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 transition hover:text-violet-700"
        >
          View Details

          <HiOutlineArrowRight />
        </Link>
      </div>
    </div>
  );
}