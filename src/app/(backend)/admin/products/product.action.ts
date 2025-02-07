"use server";

import { prisma } from "@/lib/db";

export async function getProducts() {
    const data = await prisma.product.findMany();
    return data
}