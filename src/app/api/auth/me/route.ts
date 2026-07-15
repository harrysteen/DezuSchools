import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import { User } from "@/models/User";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("session")?.value;

    if (!sessionCookie) {
      return NextResponse.json(
        { authenticated: false, error: "No session active" },
        { status: 401 }
      );
    }

    const payload = await decrypt(sessionCookie);

    if (!payload || !payload.userId) {
      return NextResponse.json(
        { authenticated: false, error: "Invalid session" },
        { status: 401 }
      );
    }

    const user = await User.findById(payload.userId).select("-password");

    if (!user) {
      return NextResponse.json(
        { authenticated: false, error: "User not found" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      authenticated: true,
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    console.error("Auth Me API error:", error);
    return NextResponse.json(
      { authenticated: false, error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
