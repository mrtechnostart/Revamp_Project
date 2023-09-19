import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma"


export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const {email:userEmail} = reqBody;
        const user = await prisma.user.findUnique({
            where:{
                email:userEmail
            }
        })
        console.log(user)
        return NextResponse.json({user},{status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error:error},{status:500})
    }
}