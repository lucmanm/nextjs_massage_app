"use server";
import { prisma } from "@/lib/db";
import { productFormSchema } from "@/lib/zod";
import { z } from "zod";



export async function createProduct(values: z.infer<typeof productFormSchema>, image: string) {

  try {
    const { title, description, duration, isActive, salePrice } = productFormSchema.parse(values)

    const checkProduct = await prisma.product.findFirst({
      where: {
        OR: [
          { title: values.title },
          { description: values.description },
        ],
      },
    });

    if (checkProduct) {
      return { status: 400, body: { error: "Product with the same title or description already exists." } };
    }


    await prisma.product.create({
      data: {
        title,
        description,
        duration,
        isActive,
        price: parseFloat(values.price),
        salePrice: salePrice ? salePrice : undefined,
        images: {
          create: image ? [{ url: image }] : [],
        },
      },
    });

    return { status: 200, body: { message: "Product created successfully." } };

  } catch {

    return {
      status: 500,
      body: {
        error: "Internal server error"
      }
    }
  }
}

