"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { updateBookingStatus } from "@/services/booking.service";

type BookingStatusSelectorProps = {
  bookingId: string;
  currentStatus: string;
};

export default function BookingStatusSelector({
  bookingId,
  currentStatus,
}: BookingStatusSelectorProps) {
  const router = useRouter();

  const [status, setStatus] = useState(currentStatus);
  const [loading, setLoading] = useState(false);

  async function handleChange(
    e: React.ChangeEvent<HTMLSelectElement>
  ) {
    const newStatus = e.target.value;

    setStatus(newStatus);
    setLoading(true);

    try {
      await updateBookingStatus(
        bookingId,
        newStatus
      );

      toast.success("Booking status updated");

      router.refresh();
    } catch (error) {
      console.error(error);

      toast.error("Failed to update status");

      setStatus(currentStatus);
    } finally {
      setLoading(false);
    }
  }

  return (
    <select
      value={status}
      disabled={loading}
      onChange={handleChange}
      className="rounded-xl border border-zinc-300 px-4 py-2 outline-none focus:border-violet-500 dark:border-zinc-700 dark:bg-zinc-900"
    >
      <option value="Pending">Pending</option>
      <option value="Confirmed">Confirmed</option>
      <option value="Completed">Completed</option>
      <option value="Cancelled">Cancelled</option>
    </select>
  );
}