import clientPromise from "@/db/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("a2z-auto-parts");
    
    // Perform a simple ping to test connection
    await db.admin().ping();
    
    return NextResponse.json({ 
      success: true, 
      message: "Database connected successfully!" 
    });
  } catch (error: any) {
    // Return error as JSON with a 500 status code
    return NextResponse.json(
      { success: false, error: error.message }, 
      { status: 500 }
    );
  }
}
