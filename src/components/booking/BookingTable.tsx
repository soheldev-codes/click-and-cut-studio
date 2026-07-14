"use client";

import { useEffect, useState } from "react";
import BookingToolbar from "./BookingToolbar";
import { getBookings } from "@/services/booking.service";
import BookingRow, { Booking } from "./BookingRow";

export default function BookingTable() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
const [status, setStatus] = useState("All");
  
const filteredBookings = bookings.filter((booking) => {
  const matchesSearch =
    booking.fullName
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    booking.email
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    booking.phone
      .toLowerCase()
      .includes(search.toLowerCase());

  const matchesStatus =
    status === "All" ||
    booking.status === status;

  return matchesSearch && matchesStatus;
});
  
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
    <>
      <BookingToolbar
        search={search}
        status={status}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
      />
      <div className="space-y-4">
        {filteredBookings.map((booking) => (
          <BookingRow
            key={booking._id}
            booking={booking}
          />
        ))}
      </div>
    </>
  );
}