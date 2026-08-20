import Link from "next/link";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { HiOutlineArrowLeft } from "react-icons/hi2";

import { auth } from "@/lib/auth";
import { findClientBookingById } from "@/lib/db/booking";

import BookingInfo from "@/components/client/booking/BookingInfo";
import BookingEvent from "@/components/client/booking/BookingEvent";
import BookingStatusBadge from "@/components/client/booking/BookingStatusBadge";
import CancelBookingButton from "@/components/client/booking/CancelBookingButton";

type BookingDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BookingDetailsPage({
  params,
}: BookingDetailsPageProps) {
  const { id } = await params;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    notFound();
  }

  const booking = await findClientBookingById(
    id,
    session.user.id
  );

  if (!booking) {
    notFound();
  }

  return (
    <section>
      <Link
        href="/client/bookings"
        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-violet-600 dark:text-zinc-300"
      >
        <HiOutlineArrowLeft className="text-lg" />
        Back to My Bookings
      </Link>

      <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-medium text-violet-600">
            Booking Details
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            {booking.eventType} Photography
          </h1>

          <p className="mt-3 text-zinc-500">
            Review your booking information and current status.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <BookingStatusBadge status={booking.status} />

          {booking._id && (
            <CancelBookingButton
              bookingId={booking._id}
              status={booking.status}
            />
          )}
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <BookingEvent booking={booking} />
        </div>

        <div>
          <BookingInfo booking={booking} />
        </div>
      </div>
    </section>
  );
}