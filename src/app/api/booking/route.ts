import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const db = await getDb();

    const booking = {
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      eventType: body.eventType,
      eventDate: body.eventDate,
      location: body.location,
      budget: body.budget,
      message: body.message,

      status: "Pending",

      createdAt: new Date(),
    };

    const result = await db
      .collection("bookings")
      .insertOne(booking);

    return NextResponse.json({
      success: true,
      insertedId: result.insertedId,
      message: "Booking created successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}





export async function GET() {
  try {
    const db = await getDb();

    const bookings = await db
      .collection("bookings")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({
      success: true,
      data: bookings,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}