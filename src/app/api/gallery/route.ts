import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { auth } from "@/lib/auth";
import { getDb } from "@/lib/db";

import { galleryApiSchema } from "@/lib/validations/gallery-api.schema";

export async function POST(request: Request) {
  try {
    // Check user session
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

    // Parse request body
    const body = await request.json();

    // Validate data
    const result = galleryApiSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: result.error.flatten(),
        },
        {
          status: 400,
        }
      );
    }

    const db = await getDb();

    const gallery = {
      ...result.data,

      createdBy: session.user.id,

      status: "published",

      createdAt: new Date(),

      updatedAt: new Date(),
    };

    const response = await db
      .collection("galleries")
      .insertOne(gallery);

    return NextResponse.json(
      {
        success: true,
        message: "Gallery created successfully",

        insertedId: response.insertedId,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Gallery Create Error:", error);

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





// Get 
export async function GET() {
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

    const db = await getDb();

    const galleries = await db
      .collection("galleries")
      .find({
        createdBy: session.user.id,
      })
      .sort({
        createdAt: -1,
      })
      .toArray();

    return NextResponse.json(
      {
        success: true,
        data: galleries,
      },
      {
        status: 200,
      }
    );
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