import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import prisma from "@/prisma/client";

const createClientSchema = z.object({
    name: z.string().min(1).max(191),
    email: z.string().min(1).max(191),
    avatar: z.string().min(1).max(191),
    organization: z.string().min(1).max(191),
    assigned_user: z.string().min(1).max(191)
})

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createClientSchema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400});

    const newClient = await prisma.client.create({
        data: { name: body.name, email: body.email, avatar: body.avatar, organization: body.organization, assigned_user: body.assigned_user}
    })

    return NextResponse.json(newClient, {status: 201});
}