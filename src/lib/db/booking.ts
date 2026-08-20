import { ObjectId } from "mongodb";

import { getDb } from "@/lib/db";
import type {
  Booking,
  BookingStatus,
} from "@/types/booking";

function serializeBooking(booking: any): Booking {
  return {
    ...booking,
    _id: booking._id.toString(),
  };
}

export async function findClientBookings(
  userId: string
): Promise<Booking[]> {
  const db = await getDb();

  const bookings = await db
    .collection("bookings")
    .find({
      userId,
    })
    .sort({
      createdAt: -1,
    })
    .toArray();

  return bookings.map(serializeBooking);
}

export async function findClientBookingById(
  id: string,
  userId: string
): Promise<Booking | null> {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const db = await getDb();

  const booking = await db.collection("bookings").findOne({
    _id: new ObjectId(id),
    userId,
  });

  if (!booking) {
    return null;
  }

  return serializeBooking(booking);
}

export async function findAllBookings(): Promise<Booking[]> {
  const db = await getDb();

  const bookings = await db
    .collection("bookings")
    .find({})
    .sort({
      createdAt: -1,
    })
    .toArray();

  return bookings.map(serializeBooking);
}

export async function findBookingById(
  id: string
): Promise<Booking | null> {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const db = await getDb();

  const booking = await db.collection("bookings").findOne({
    _id: new ObjectId(id),
  });

  if (!booking) {
    return null;
  }

  return serializeBooking(booking);
}

export async function updateClientBookingStatus(
  id: string,
  userId: string,
  status: BookingStatus
) {
  if (!ObjectId.isValid(id)) {
    return {
      matchedCount: 0,
      modifiedCount: 0,
    };
  }

  const db = await getDb();

  return db.collection("bookings").updateOne(
    {
      _id: new ObjectId(id),
      userId,
    },
    {
      $set: {
        status,
        updatedAt: new Date(),
      },
    }
  );
}