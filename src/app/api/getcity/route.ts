import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { getToken } from "next-auth/jwt";
export async function GET(request: NextRequest) {
  try {
    const session = await getToken({ req: request });
    if (session && session.user.id) {
      const data = await prisma.repairFacility.findMany({});
      const uniqueCityState = {};

      data.forEach((item) => {
        const { state, city } = item;
        if (!uniqueCityState[state]) {
          uniqueCityState[state] = [];
        }
        if (!uniqueCityState[state].includes(city)) {
          uniqueCityState[state].push(city);
        }
      });
      return NextResponse.json(uniqueCityState, { status: 200 });
    }
    return NextResponse.json({ success: "Unauthorized" }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
