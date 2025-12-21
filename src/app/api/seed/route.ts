import clientPromise from "@/db/client";
import { autoBodyPartsSeed } from "@/db/seedData"; // Fix 2 (Matching your filename)
import { NextResponse } from "next/server"; // Fix 1

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("a2z-auto-parts");
    const collection = db.collection("products");

    // Clear existing to avoid duplicates during testing
    await collection.deleteMany({});

    // Formatting data for MongoDB
    const dataToInsert = autoBodyPartsSeed.map((item: any) => {
      const { _id, ...rest } = item;
      return {
        ...rest,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    const result = await collection.insertMany(dataToInsert as any);

    return NextResponse.json({ 
      success: true, 
      message: "Database seeded!", 
      inserted: result.insertedCount 
    });
  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}
