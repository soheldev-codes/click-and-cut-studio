import axios from "axios";

export type BookingPayload = {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  budget: string;
  message: string;
};

export async function createBooking(
  payload: BookingPayload
) {
  const { data } = await axios.post(
    "/api/booking",
    payload
  );

  return data;
}



export async function getBookings() {
  const response = await fetch("/api/booking", {
    credentials: "include",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch bookings");
  }

  const result = await response.json();

  return result.data;
}




export async function getBooking(id: string) {
  const response = await fetch(`/api/booking/${id}`, {
    credentials: "include",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch booking");
  }

  const result = await response.json();

  return result.data;
}