import { getReadingBooks } from "@/services/reading-book";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const readingBooks = await getReadingBooks();

  return NextResponse.json(readingBooks);
};
