"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useSession } from "@/lib/auth-client";
import Button from "@/components/ui/button";
import {
  bookingSchema,
  type BookingSchema,
} from "@/lib/validations/booking.schema";
import { createBooking } from "@/services/booking.service";

export default function BookingForm() {
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingSchema>({
    resolver: zodResolver(bookingSchema),
  });

  async function onSubmit(data: BookingSchema) {
    try {
      setLoading(true);

      const result = await createBooking(data);

      if (result.success) {
        toast.success("Booking submitted successfully!");

        reset();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="grid gap-6 md:grid-cols-2">

        {/* Full Name */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Full Name
          </label>

          <input
            {...register("fullName")}
            placeholder="John Doe"
            className="h-11 w-full rounded-xl border border-zinc-200 px-4 outline-none transition focus:border-violet-500 dark:border-zinc-700 dark:bg-zinc-900"
          />

          {errors.fullName && (
            <p className="mt-2 text-sm text-red-500">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Logged in Account
          </label>

          <div className="flex h-11 items-center rounded-xl border border-zinc-200 bg-zinc-100 px-4 text-sm text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
            {session?.user?.email}
          </div>
        </div>



        {/* Phone */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Phone Number
          </label>

          <input
            {...register("phone")}
            placeholder="01XXXXXXXXX"
            className="h-11 w-full rounded-xl border border-zinc-200 px-4 outline-none transition focus:border-violet-500 dark:border-zinc-700 dark:bg-zinc-900"
          />

          {errors.phone && (
            <p className="mt-2 text-sm text-red-500">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Event Type */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Event Type
          </label>

          <select
            {...register("eventType")}
            className="h-11 w-full rounded-xl border border-zinc-200 px-4 outline-none transition focus:border-violet-500 dark:border-zinc-700 dark:bg-zinc-900"
          >
            <option value="">Select Event</option>
            <option value="Wedding">Wedding</option>
            <option value="Holud">Holud</option>
            <option value="Birthday">Birthday</option>
            <option value="Corporate">Corporate</option>
            <option value="Engagement">Engagement</option>
            <option value="Other">Other</option>
          </select>

          {errors.eventType && (
            <p className="mt-2 text-sm text-red-500">
              {errors.eventType.message}
            </p>
          )}
        </div>

        {/* Event Date */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Event Date
          </label>

          <input
            type="date"
            {...register("eventDate")}
            className="h-11 w-full rounded-xl border border-zinc-200 px-4 outline-none transition focus:border-violet-500 dark:border-zinc-700 dark:bg-zinc-900"
          />

          {errors.eventDate && (
            <p className="mt-2 text-sm text-red-500">
              {errors.eventDate.message}
            </p>
          )}
        </div>

        {/* Budget */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Budget
          </label>

          <select
            {...register("budget")}
            className="h-11 w-full rounded-xl border border-zinc-200 px-4 outline-none transition focus:border-violet-500 dark:border-zinc-700 dark:bg-zinc-900"
          >
            <option value="">Select Budget</option>
            <option value="10k-20k">10k - 20k</option>
            <option value="20k-40k">20k - 40k</option>
            <option value="40k-60k">40k - 60k</option>
            <option value="60k-100k">60k - 100k</option>
            <option value="100k+">100k+</option>
          </select>

          {errors.budget && (
            <p className="mt-2 text-sm text-red-500">
              {errors.budget.message}
            </p>
          )}
        </div>

        {/* Location */}

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Event Location
          </label>

          <input
            {...register("location")}
            placeholder="Dhaka, Bangladesh"
            className="h-11 w-full rounded-xl border border-zinc-200 px-4 outline-none transition focus:border-violet-500 dark:border-zinc-700 dark:bg-zinc-900"
          />

          {errors.location && (
            <p className="mt-2 text-sm text-red-500">
              {errors.location.message}
            </p>
          )}
        </div>

        {/* Message */}

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Message
          </label>

          <textarea
            rows={6}
            {...register("message")}
            placeholder="Tell us about your event..."
            className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-violet-500 dark:border-zinc-700 dark:bg-zinc-900"
          />

          {errors.message && (
            <p className="mt-2 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

      </div>

      <div className="mt-8 flex justify-end">
        <Button
          type="submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Book Now"}
        </Button>
      </div>
    </form>
  );
}