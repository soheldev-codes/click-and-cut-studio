"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  HiOutlineExclamationTriangle,
  HiOutlineXCircle,
} from "react-icons/hi2";
import toast from "react-hot-toast";

import Button from "@/components/ui/button";
import type { BookingStatus } from "@/types/booking";

type CancelBookingButtonProps = {
  bookingId: string;
  status: BookingStatus;
};

export default function CancelBookingButton({
  bookingId,
  status,
}: CancelBookingButtonProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  if (status !== "Pending") {
    return null;
  }

  async function handleCancel() {
    try {
      setLoading(true);

      const response = await fetch(
        `/api/client/bookings/${bookingId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        toast.error(
          result.message || "Failed to cancel booking"
        );

        return;
      }

      toast.success("Booking cancelled successfully");

      setOpen(false);

      router.refresh();
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Cancel Button */}
      <Button
        type="button"
        onClick={() => setOpen(true)}
        className="gap-2 bg-red-600 hover:bg-red-700"
      >
        <HiOutlineXCircle className="text-lg" />
        Cancel Booking
      </Button>

      {/* Confirmation Modal */}
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <button
            type="button"
            onClick={() => !loading && setOpen(false)}
            className="absolute inset-0 cursor-default bg-black/60 backdrop-blur-sm"
            aria-label="Close modal"
          />

          {/* Modal */}
          <div className="relative z-10 w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
            {/* Warning Icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-600 dark:bg-red-950/50">
              <HiOutlineExclamationTriangle className="text-3xl" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-zinc-900 dark:text-white">
              Cancel this booking?
            </h2>

            <p className="mt-3 leading-7 text-zinc-500 dark:text-zinc-400">
              Are you sure you want to cancel this booking? This action
              cannot be undone.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <Button
                type="button"
                onClick={() => setOpen(false)}
                disabled={loading}
                className="bg-zinc-200 text-zinc-800 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
              >
                Keep Booking
              </Button>

              <Button
                type="button"
                onClick={handleCancel}
                disabled={loading}
                className="gap-2 bg-red-600 hover:bg-red-700"
              >
                <HiOutlineXCircle className="text-lg" />

                {loading
                  ? "Cancelling..."
                  : "Yes, Cancel"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}