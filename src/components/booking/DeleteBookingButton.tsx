"use client";

import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi2";
import toast from "react-hot-toast";

import { deleteBooking } from "@/services/booking.service";

type DeleteBookingButtonProps = {
  bookingId: string;
};

export default function DeleteBookingButton({
  bookingId,
}: DeleteBookingButtonProps) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (!confirmed) return;

    try {
      await deleteBooking(bookingId);

      toast.success("Booking deleted successfully");

      router.push("/dashboard/bookings");
    } catch (error) {
      console.error(error);

      toast.error("Failed to delete booking");
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
    >
      <HiOutlineTrash />

      Delete Booking
    </button>
  );
}