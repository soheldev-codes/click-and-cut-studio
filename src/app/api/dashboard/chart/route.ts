import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET() {
  try {
    const db = await getDb();

    const bookings = await db
      .collection("bookings")
      .find({})
      .toArray();

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const monthlyData = months.map((month) => ({
      month,
      bookings: 0,
    }));

    bookings.forEach((booking) => {
      const date = new Date(booking.createdAt);

      if (!isNaN(date.getTime())) {
        monthlyData[date.getMonth()].bookings++;
      }
    });

    return NextResponse.json({
      success: true,
      data: monthlyData,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load chart data",
      },
      {
        status: 500,
      }
    );
  }
}