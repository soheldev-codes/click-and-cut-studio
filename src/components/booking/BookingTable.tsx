"use client";

import { useEffect, useState } from "react";

import { getBookings } from "@/services/booking.service";
import BookingRow, { Booking } from "./BookingRow";

export default function BookingTable() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBookings() {
      try {
        const data = await getBookings();

        setBookings(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadBookings();
  }, []);

  if (loading) {
    return (
      <div className="rounded-2xl border border-zinc-200 p-16 text-center dark:border-zinc-800">
        Loading bookings...
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-300 p-16 text-center dark:border-zinc-700">
        No bookings found.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {bookings.map((booking) => (
        <BookingRow
          key={booking._id}
          booking={booking}
        />
      ))}
    </div>
  );
}