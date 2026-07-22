"use client";

import { BookingStatus } from "@/types/booking";

type BookingStatusBadgeProps = {
  status: BookingStatus;
};

export default function BookingStatusBadge({
  status,
}: BookingStatusBadgeProps) {
  const styles: Record<
    BookingStatus,
    string
  > = {
    Pending:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",

    Confirmed:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",

    Completed:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",

    Cancelled:
      "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}