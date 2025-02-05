"use server"

import { prisma } from "@/lib/db";
import { createUserSchema } from "@/lib/zod";
import bcrypt from 'bcrypt';
import { z } from "zod";

export async function createUserAuth(data: z.infer<typeof createUserSchema>) {
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
                password: hashedPassword
            }
        });

        console.log(hashedPassword);
        return { response, status: 200 }

    } catch (error) {

        console.log("--------------------");
        console.log("error creating user:", error);

        return {
            status: 500,
            body: {
                error: "Internal server error"
            }
        }
    }
}