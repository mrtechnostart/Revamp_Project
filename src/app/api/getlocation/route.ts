import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import prisma from "../../../../lib/prisma";
export async function POST(request: NextRequest) {
  try {
    const session = await getToken({ req: request });
    const { city } = await request.json();
    if (session && session.user.id) {
      if (city) {
        const data = await prisma.repairFacility.findMany({
          where: {
            city: city,
          },
        });
        return NextResponse.json({ data: data }, { status: 200 });
      } else {
        return NextResponse.json({ data: [] }, { status: 200 });
      }
    }

    return NextResponse.json({ value: "unauthorized" }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
