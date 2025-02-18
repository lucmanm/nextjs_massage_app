"use server";

import { prisma } from "@/lib/db";

export async function getProducts() {
    const data = await prisma.product.findMany({
        include: { images: true }
    });
    return data
}

export async function deleteProduct(id: string) {
    try {
        // Use a transaction to ensure atomicity
        await prisma.$transaction(async (prisma) => {
            // Delete all images associated with the product
            await prisma.image.deleteMany({
                where: {
                    productId: id,
                },
            });

            // Delete the product
            await prisma.product.delete({
                where: {
                    id: id,
                },
            });
        });

        // If the transaction succeeds, return a success response
        return {
            status: 200,
            message: "Successfully Deleted",
        };

    } catch {
        return {
            status: 501,
            message: "Something went wrong",
        };
    }
}