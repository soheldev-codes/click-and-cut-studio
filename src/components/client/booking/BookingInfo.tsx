import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineUser,
} from "react-icons/hi2";

import type { Booking } from "@/types/booking";

type BookingInfoProps = {
  booking: Booking;
};

export default function BookingInfo({
  booking,
}: BookingInfoProps) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="text-xl font-semibold">
        Client Information
      </h2>

      <div className="mt-6 space-y-5">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-900/30">
            <HiOutlineUser className="text-xl" />
          </div>

          <div>
            <p className="text-sm text-zinc-500">
              Full Name
            </p>

            <p className="mt-1 font-medium text-zinc-900 dark:text-white">
              {booking.fullName}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-900/30">
            <HiOutlineEnvelope className="text-xl" />
          </div>

          <div className="min-w-0">
            <p className="text-sm text-zinc-500">
              Email Address
            </p>

            <p className="mt-1 truncate font-medium text-zinc-900 dark:text-white">
              {booking.email}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-900/30">
            <HiOutlinePhone className="text-xl" />
          </div>

          <div>
            <p className="text-sm text-zinc-500">
              Phone Number
            </p>

            <p className="mt-1 font-medium text-zinc-900 dark:text-white">
              {booking.phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}