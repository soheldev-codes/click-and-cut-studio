import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET() {
  try {
    const db = await getDb();

    const galleries = await db
      .collection("galleries")
      .find({
        visibility: "public",
      })
      .sort({
        createdAt: -1,
      })
      .toArray();

    return NextResponse.json({
      success: true,
      data: galleries,
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