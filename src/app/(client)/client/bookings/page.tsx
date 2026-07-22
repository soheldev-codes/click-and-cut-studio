import { headers } from "next/headers";

import { auth } from "@/lib/auth";
import { findClientBookings } from "@/lib/db/booking";

import BookingList from "@/components/client/booking/BookingList";

export default async function ClientBookingsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return <div>Please login.</div>;
  }

  const bookings = await findClientBookings(session.user.id);

  return (
    <section>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          My Bookings
        </h1>

        <p className="mt-2 text-zinc-500">
          Manage your photography bookings.
        </p>
      </div>

      <BookingList bookings={bookings} />
    </section>
  );
}