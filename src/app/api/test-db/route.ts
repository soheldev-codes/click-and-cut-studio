import clientPromise from "@/lib/db";
import { NextResponse } from "next/server";






export async function GET() {
  try {
    const client = await clientPromise;

    await client.db(process.env.MONGODB_DB).command({ ping: 1 });

    return NextResponse.json({
      success: true,
      message: "MongoDB Connected Successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Database Connection Failed",
      },
      {
        status: 500,
      }
    );
  }
}


