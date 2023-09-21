import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
export async function GET(request: NextRequest) {
    try {
        const data = await prisma.repairFacility.findMany({})
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

        return NextResponse.json(uniqueCityState,{status:200})
    } catch (error) {
        return NextResponse.json({error:error},{status:500})
    }



}