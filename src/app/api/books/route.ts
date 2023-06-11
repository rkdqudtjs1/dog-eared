import { searchBooks } from "@/services/book";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);

  const name = searchParams.get("name") || "";
  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 10);

  const { data } = await searchBooks(name, { page, limit });

  return NextResponse.json(data);
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  return NextResponse.json({ message: new Date(), body });
};
