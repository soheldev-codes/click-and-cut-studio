import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET() {
  try {
    const db = await getDb();

    const recentBookings = await db
      .collection("bookings")
      .find({})
      .sort({ createdAt: -1 })
      .limit(5)
      .toArray();

    const recentGalleries = await db
      .collection("galleries")
      .find({})
      .sort({ createdAt: -1 })
      .limit(5)
      .toArray();

    return NextResponse.json({
      success: true,
      data: {
        recentBookings,
        recentGalleries,
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch dashboard data",
      },
      {
        status: 500,
      }
    );
  }
}