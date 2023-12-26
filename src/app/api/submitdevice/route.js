import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
export async function POST(req) {
  try {
    const token = await getToken({ req: req });
    const data = await req.json();
    if (token && token.user.id) {
      const response = await prisma.devices.create({
        data: data,
      });
      return NextResponse.json({ data: response }, { status: 200 });
    }
    return NextResponse.json({ data: "unauthorized" }, { status: 500 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    const token = await getToken({ req });
    const { id, ...restData } = await req.json();
    if (token && token.user.role === "ADMIN") {
      const response = await prisma.devices.update({
        where: {
          id: id,
        },
        data: restData,
      });
      return NextResponse.json({ data: response }, { status: 200 });
    }
    return NextResponse.json({ data: "unauthorized" }, { status: 500 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const token = await getToken({ req: req });
    if (token && token.user.id) {
      const data = await prisma.devices.findMany({
        where: {
          userId: token.user.id,
        },
      });
      return NextResponse.json({ data: data }, { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
