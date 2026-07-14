"use client";

import { use, useEffect, useState } from "react";

import BookingDetails from "@/components/booking/BookingDetails";
import { getBooking } from "@/services/booking.service";

type Booking = {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  budget: string;
  message: string;
  status: string;
};

export default function BookingDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [booking, setBooking] =
    useState<Booking | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBooking() {
      try {
        const data = await getBooking(id);

        setBooking(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadBooking();
  }, [id]);

  if (loading) {
    return (
      <div className="rounded-2xl border p-20 text-center">
        Loading booking...
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="rounded-2xl border p-20 text-center">
        Booking not found.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Booking Details
        </h1>

        <p className="text-zinc-500">
          View booking information.
        </p>
      </div>

      <BookingDetails booking={booking} />
    </div>
  );
}