import { NextRequest,NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient()


export async function GET(request:NextRequest){
    try {
        const video = await prisma.video.findMany({
                orderBy:{createdAt:"desc"}
        })
        return NextResponse.json(video)
    } catch (error) {
        return NextResponse.json({error:"Error fetching videos"},{status:500})
    }finally{
        await prisma.$disconnect()
    }


}