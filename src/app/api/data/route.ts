import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { getToken } from "next-auth/jwt";

export async function POST(request: NextRequest) {
  try {
    const session = await getToken({ req: request });
    console.log(session);
    if (session && session.user.id) {
      const user = await prisma.user.findUnique({
        where: {
          id: session.user.id,
        },
      });
      return NextResponse.json({ user }, { status: 200 });
    }
    return NextResponse.json({ data: "unauthorized" }, { status: 500 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
