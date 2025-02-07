"use server"

import { contactFormSchema } from "@/components/connect-with-us";
import { prisma } from "@/lib/db";
import { z } from "zod";

export async function contactUsSendMessage(values: z.infer<typeof contactFormSchema>) {
    try {

        // Check for recent messages from the same email address
        const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000); // 1 hour ago

        const recentMessage = await prisma.conactUs.findFirst({
            where: {
                email: values.email,
                createdAt: {
                    gte: oneHourAgo, // Messages created within the last hour
                },
            },
        });
        if (recentMessage) {
            return {
                status: 429, // Too Many Requests
                body: {
                    message: "Already sent your message. Please try again later.",
                },
            };
        }

        // If no recent message, create a new one
        const response = await prisma.conactUs.create({
            data: {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                phoneNumber: values.phoneNumber,
                message: values.message,
                subject: values.subject,
            },
        });

        if (response) {
            return { status: 201, body: { message: "Message Sent." } };
        }

    } catch (error) {
        console.error("Error in contactUsSendMessage:", error);
        return {
            status: 500,
            body: {
                error: "Internal server error",
            },
        };
    }
}