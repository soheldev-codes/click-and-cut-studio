import {
  HiOutlineCalendarDays,
  HiOutlineCurrencyDollar,
  HiOutlineMapPin,
  HiOutlinePhoto,
} from "react-icons/hi2";

import type { Booking } from "@/types/booking";

type BookingEventProps = {
  booking: Booking;
};

export default function BookingEvent({
  booking,
}: BookingEventProps) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="text-xl font-semibold">
        Event Information
      </h2>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-800/60">
          <div className="flex items-center gap-3 text-violet-600">
            <HiOutlinePhoto className="text-xl" />
            <span className="text-sm font-medium">
              Event Type
            </span>
          </div>

          <p className="mt-3 font-semibold text-zinc-900 dark:text-white">
            {booking.eventType}
          </p>
        </div>

        <div className="rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-800/60">
          <div className="flex items-center gap-3 text-violet-600">
            <HiOutlineCalendarDays className="text-xl" />
            <span className="text-sm font-medium">
              Event Date
            </span>
          </div>

          <p className="mt-3 font-semibold text-zinc-900 dark:text-white">
            {booking.eventDate}
          </p>
        </div>

        <div className="rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-800/60">
          <div className="flex items-center gap-3 text-violet-600">
            <HiOutlineMapPin className="text-xl" />
            <span className="text-sm font-medium">
              Location
            </span>
          </div>

          <p className="mt-3 font-semibold text-zinc-900 dark:text-white">
            {booking.location}
          </p>
        </div>

        <div className="rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-800/60">
          <div className="flex items-center gap-3 text-violet-600">
            <HiOutlineCurrencyDollar className="text-xl" />
            <span className="text-sm font-medium">
              Budget
            </span>
          </div>

          <p className="mt-3 font-semibold text-zinc-900 dark:text-white">
            {booking.budget}
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-zinc-50 p-5 dark:bg-zinc-800/60">
        <p className="text-sm font-medium text-zinc-500">
          Message
        </p>

        <p className="mt-3 whitespace-pre-wrap leading-7 text-zinc-700 dark:text-zinc-300">
          {booking.message}
        </p>
      </div>
    </div>
  );
}