import axios from "axios";

import type {
  Booking,
  BookingStatus,
  CreateBooking,
} from "@/types/booking";

type ApiResponse<T> = {
  success: boolean;
  message?: string;
  data: T;
};

type CreateBookingResponse = {
  insertedId: string;
};

export async function createBooking(
  payload: CreateBooking
): Promise<ApiResponse<CreateBookingResponse>> {
  const { data } = await axios.post<
    ApiResponse<CreateBookingResponse>
  >("/api/booking", payload);

  return data;
}

export async function getBookings(): Promise<Booking[]> {
  const response = await fetch("/api/booking", {
    credentials: "include",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch bookings");
  }

  const result: ApiResponse<Booking[]> =
    await response.json();

  return result.data;
}

export async function getBooking(
  id: string
): Promise<Booking> {
  const response = await fetch(`/api/booking/${id}`, {
    credentials: "include",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch booking");
  }

  const result: ApiResponse<Booking> =
    await response.json();

  return result.data;
}

export async function updateBookingStatus(
  id: string,
  status: BookingStatus
): Promise<ApiResponse<null>> {
  const response = await fetch(`/api/booking/${id}`, {
    method: "PATCH",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to update booking");
  }

  return response.json();
}

export async function deleteBooking(
  id: string
): Promise<ApiResponse<null>> {
  const response = await fetch(`/api/booking/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to delete booking");
  }

  return response.json();
}

export async function getClientBookings(): Promise<Booking[]> {
  const response = await fetch("/api/client/bookings", {
    credentials: "include",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      "Failed to fetch client bookings"
    );
  }

  const result: ApiResponse<Booking[]> =
    await response.json();

  return result.data;
}