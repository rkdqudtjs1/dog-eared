import { NextRequest, NextResponse } from "next/server";

type Params = { sampleId: string };
export const GET = async (
  request: NextRequest,
  { params }: { params: Params }
) => {
  return NextResponse.json({ sampleId: params.sampleId });
};
