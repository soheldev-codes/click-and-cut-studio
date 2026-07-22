"use client";

import { Booking } from "@/types/booking";

import BookingCard from "./BookingCard";
import EmptyBooking from "./EmptyBooking";

type BookingListProps = {
  bookings: Booking[];
};

export default function BookingList({
  bookings,
}: BookingListProps) {
  if (!bookings.length) {
    return <EmptyBooking />;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {bookings.map((booking) => (
        <BookingCard
          key={booking._id}
          booking={booking}
        />
      ))}
    </div>
  );
}