import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
export async function POST(request) {
  try {
    const session = await getToken({ req: request });
    const data = await request.json();
    if (session && session.user.id) {
      const { id, name, phone, address, state, city } = data;
      const response = await prisma.user.update({
        where: {
          id: id,
        },
        data: {
          name: name,
          phone: phone,
          address: address,
          city: city,
          state: state,
        },
      });
      return NextResponse.json({ response }, { status: 200 });
    } else {
      return NextResponse.json({ status: "unauthorized" }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const token = await getToken({ req: req });
    if (token && token.user.role === "ADMIN") {
      const data = await prisma.devices.findMany({});
      return NextResponse.json({ data: data }, { status: 200 });
    }
    return NextResponse.json({ data: "unauthorized" }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
