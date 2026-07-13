import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

import { auth } from "@/lib/auth";
import { getDb } from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;

    const db = await getDb();

    const gallery = await db.collection("galleries").findOne({
      _id: new ObjectId(id),
      createdBy: session.user.id,
    });

    if (!gallery) {
      return NextResponse.json(
        { success: false, message: "Gallery not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: gallery,
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


export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const { id } = await params;

    const db = await getDb();

    const result = await db.collection("galleries").deleteOne({
      _id: new ObjectId(id),
      createdBy: session.user.id,
    });

    if (!result.deletedCount) {
      return NextResponse.json(
        {
          success: false,
          message: "Gallery not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Gallery deleted successfully",
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