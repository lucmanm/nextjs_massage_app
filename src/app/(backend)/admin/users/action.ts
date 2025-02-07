"use server"

import { prisma } from "@/lib/db";
import { createUserSchema } from "@/lib/zod";
import bcrypt from 'bcrypt';
import { z } from "zod";

export async function createUserRole(data: z.infer<typeof createUserSchema>) {
    try {


        const existingUser = await prisma.user.findUnique({
            where: {
                email: data.email
            }
        })

        if (existingUser) {
            return { status: 400, body: { error: "Email already in use" } };
        }
        const hashedPassword = await bcrypt.hash(data.password, 10); // 10 is the salt rounds

        const response = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: hashedPassword,
                role: data.role
            }
        });

        return { response, status: 200 }

    } catch {

        return {
            status: 500,
            body: {
                error: "Internal server error"
            }
        }
    }
}