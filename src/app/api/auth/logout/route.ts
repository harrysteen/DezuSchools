import { NextResponse } from "next/server";
import { deleteSession } from "@/lib/session";

export async function POST() {
  try {
    await deleteSession();
    return NextResponse.json(
      { message: "Logged out successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Logout API error:", error);
    return NextResponse.json(
      { error: "An error occurred while logging out" },
      { status: 500 }
    );
  }
}
