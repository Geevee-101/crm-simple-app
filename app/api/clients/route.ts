import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createClientSchema } from "../../validationSchema";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createClientSchema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.format(), { status: 400});

    const newClient = await prisma.client.create({
        data: { name: body.name, email: body.email, avatar: body.avatar, organization: body.organization, assigned_user: body.assigned_user}
    })

    return NextResponse.json(newClient, {status: 201});
}

export async function GET() {
    try {
        console.log("getting!")
        const clients = await prisma.client.findMany();
        return NextResponse.json(clients, {status: 200});
    } catch(error) {
        return NextResponse.json({message: 'could not find data'}, {status: 500});
    }
}