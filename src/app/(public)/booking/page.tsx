import BookingForm from "@/components/booking/BookingForm";

export default function BookingPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <div className="mb-10 text-center">

        <h1 className="text-5xl font-bold">
          Book Your Session
        </h1>

        <p className="mt-4 text-zinc-500">
          Tell us about your event and we'll
          contact you shortly.
        </p>

      </div>

      <BookingForm />
    </section>
  );
}