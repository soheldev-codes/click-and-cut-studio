import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET() {
  try {
    const db = await getDb();

    const totalGalleries = await db
      .collection("galleries")
      .countDocuments();

    const totalBookings = await db
      .collection("bookings")
      .countDocuments();

    const pendingBookings = await db
      .collection("bookings")
      .countDocuments({
        status: "Pending",
      });

    const uniqueClients = await db
      .collection("bookings")
      .distinct("email");

    return NextResponse.json({
      success: true,
      data: {
        totalGalleries,
        totalBookings,
        pendingBookings,
        totalClients: uniqueClients.length,
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load dashboard stats",
      },
      {
        status: 500,
      }
    );
  }
}