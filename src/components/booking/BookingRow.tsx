"use client";

import Link from "next/link";
import {
  HiOutlineEye,
  HiOutlineTrash,
  HiOutlinePencilSquare,
} from "react-icons/hi2";

import BookingStatus from "./BookingStatus";

export type Booking = {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  budget: string;
  status: string;
};

type BookingRowProps = {
  booking: Booking;
};

export default function BookingRow({
  booking,
}: BookingRowProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}
        <div className="space-y-2">

          <h3 className="text-lg font-semibold">
            {booking.fullName}
          </h3>

          <p className="text-sm text-zinc-500">
            {booking.email}
          </p>

          <p className="text-sm text-zinc-500">
            {booking.phone}
          </p>

        </div>

        {/* Middle */}
        <div className="grid grid-cols-2 gap-6 text-sm md:grid-cols-4">

          <div>
            <p className="text-zinc-500">
              Event
            </p>

            <h4 className="font-semibold">
              {booking.eventType}
            </h4>
          </div>

          <div>
            <p className="text-zinc-500">
              Date
            </p>

            <h4 className="font-semibold">
              {booking.eventDate}
            </h4>
          </div>

          <div>
            <p className="text-zinc-500">
              Budget
            </p>

            <h4 className="font-semibold">
              {booking.budget}
            </h4>
          </div>

          <div>
            <p className="text-zinc-500">
              Status
            </p>

            <BookingStatus
              status={booking.status}
            />
          </div>

        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">

          <Link
            href={`/dashboard/bookings/${booking._id}`}
            className="rounded-xl border border-zinc-200 p-2 transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            <HiOutlineEye className="text-xl" />
          </Link>

          <button
            className="rounded-xl border border-zinc-200 p-2 transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            <HiOutlinePencilSquare className="text-xl text-blue-600" />
          </button>

          <button
            className="rounded-xl border border-zinc-200 p-2 transition hover:bg-red-50 dark:border-zinc-700 dark:hover:bg-red-900/20"
          >
            <HiOutlineTrash className="text-xl text-red-600" />
          </button>

        </div>

      </div>

    </div>
  );
}