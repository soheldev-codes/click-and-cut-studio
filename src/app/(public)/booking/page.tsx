import Link from "next/link";
import { headers } from "next/headers";

import { auth } from "@/lib/auth";
import BookingForm from "@/components/booking/BookingForm";
import Button from "@/components/ui/button";

export default async function BookingPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

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

      {!session?.user ? (
        <div className="mx-auto max-w-xl rounded-3xl border border-zinc-200 bg-white p-10 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

          <h2 className="text-2xl font-semibold">
            Login Required
          </h2>

          <p className="mt-4 text-zinc-500">
            Please login first to book your
            photography session.
          </p>

          <div className="mt-8 flex justify-center gap-4">

            <Link href="/login">
              <Button>
                Login
              </Button>
            </Link>

            <Link href="/register">
              <Button variant="outline">
                Create Account
              </Button>
            </Link>

          </div>

        </div>
      ) : (
        <BookingForm />
      )}
    </section>
  );
}