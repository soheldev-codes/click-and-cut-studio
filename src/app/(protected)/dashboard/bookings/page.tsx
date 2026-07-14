import BookingTable from "@/components/booking/BookingTable";

export default function BookingsPage() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Bookings
        </h1>

        <p className="text-zinc-500">
          Manage all booking requests.
        </p>
      </div>

      <BookingTable />

    </div>
  );
}