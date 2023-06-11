import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);

  return NextResponse.json({
    message: new Date(),
    page: searchParams.get("page"),
  });
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  return NextResponse.json({ message: new Date(), body });
};
