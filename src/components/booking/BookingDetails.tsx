import BookingStatus from "./BookingStatus";

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

type BookingDetailsProps = {
  booking: Booking;
};

export default function BookingDetails({
  booking,
}: BookingDetailsProps) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold">
            {booking.fullName}
          </h2>

          <p className="mt-1 text-zinc-500">
            Booking Information
          </p>
        </div>

        <BookingStatus status={booking.status} />

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <p className="text-sm text-zinc-500">
            Full Name
          </p>

          <h3 className="mt-1 font-semibold">
            {booking.fullName}
          </h3>
        </div>

        <div>
          <p className="text-sm text-zinc-500">
            Email
          </p>

          <h3 className="mt-1 font-semibold">
            {booking.email}
          </h3>
        </div>

        <div>
          <p className="text-sm text-zinc-500">
            Phone
          </p>

          <h3 className="mt-1 font-semibold">
            {booking.phone}
          </h3>
        </div>

        <div>
          <p className="text-sm text-zinc-500">
            Event Type
          </p>

          <h3 className="mt-1 font-semibold">
            {booking.eventType}
          </h3>
        </div>

        <div>
          <p className="text-sm text-zinc-500">
            Event Date
          </p>

          <h3 className="mt-1 font-semibold">
            {booking.eventDate}
          </h3>
        </div>

        <div>
          <p className="text-sm text-zinc-500">
            Budget
          </p>

          <h3 className="mt-1 font-semibold">
            {booking.budget}
          </h3>
        </div>

        <div className="md:col-span-2">
          <p className="text-sm text-zinc-500">
            Event Location
          </p>

          <h3 className="mt-1 font-semibold">
            {booking.location}
          </h3>
        </div>

        <div className="md:col-span-2">
          <p className="text-sm text-zinc-500">
            Message
          </p>

          <div className="mt-2 rounded-2xl bg-zinc-100 p-5 dark:bg-zinc-800">
            <p className="leading-7">
              {booking.message}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}