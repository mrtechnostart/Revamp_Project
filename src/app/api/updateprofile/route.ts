import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
export async function POST(request: NextRequest) {
    try {
        const data = await request.json()
        const { id, name, phone, address ,state,city} = data
        const response = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                name: name,
                phone: phone,
                address: address,
                city:city,
                state:state
            }
        })
        return NextResponse.json({ response }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}