import clientPromise from "@/db/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // This 'body' contains the { query: { limit, productSectionName } } sent from Redux
    const body = await request.json(); 
    const sectionName = body?.query?.productSectionName;
    const limit = body?.query?.limit || 16;

    const client = await clientPromise;
    const db = client.db("a2z-auto-parts"); 

    // Optional: Filter by section if your database has a 'section' field
    const queryFilter = sectionName ? { section: sectionName } : {};

    const products = await db
      .collection("products")
      .find(queryFilter)
      .limit(limit)
      .toArray();
    
    return NextResponse.json({ 
      success: true, 
      count: products.length, 
      data: products 
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
