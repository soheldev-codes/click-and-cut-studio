import { ObjectId } from "mongodb";

import { getDb } from "@/lib/db";
import type { Booking } from "@/types/booking";

export async function findClientBookings(
  userId: string
): Promise<Booking[]> {
  const db = await getDb();

  return db
    .collection<Booking>("bookings")
    .find({
      userId,
    })
    .sort({
      createdAt: -1,
    })
    .toArray();
}

export async function findClientBookingById(
  id: string,
  userId: string
): Promise<Booking | null> {
  const db = await getDb();

  return db.collection<Booking>("bookings").findOne({
    _id: new ObjectId(id),
    userId,
  });
}

export async function findAllBookings(): Promise<Booking[]> {
  const db = await getDb();

  return db
    .collection<Booking>("bookings")
    .find({})
    .sort({
      createdAt: -1,
    })
    .toArray();
}

export async function findBookingById(
  id: string
): Promise<Booking | null> {
  const db = await getDb();

  return db.collection<Booking>("bookings").findOne({
    _id: new ObjectId(id),
  });
}