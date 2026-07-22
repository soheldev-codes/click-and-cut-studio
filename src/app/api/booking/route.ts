import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function POST(request: Request) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return NextResponse.json(
        {
          success: false,
          message: "Please login first",
        },
        {
          status: 401,
        }
      );
    }

    const body = await request.json();

    const db = await getDb();

    const booking = {
      userId: session.user.id,

      clientEmail: session.user.email,

      fullName: body.fullName,

      email: session.user.email,

      phone: body.phone,

      eventType: body.eventType,

      eventDate: body.eventDate,

      location: body.location,

      budget: body.budget,

      message: body.message,

      status: "Pending",

      createdAt: new Date(),

      updatedAt: new Date(),
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