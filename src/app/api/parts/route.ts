import clientPromise from "@/db/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("a2z-db");

    // Fetch data from a collection named "products"
    const data = await db.collection("products").find({}).toArray();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to connect to DB" }, { status: 500 });
  }
}
