"use server"
import { prisma } from "@/lib/db";
import { z } from "zod";
import { productFormSchema } from "./product-form";

export async function createProduct(values: z.infer<typeof productFormSchema>) {

  try {

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
        title: values.title,
        description: values.description,
        price: parseFloat(values.price),
        salePrice: values.salePrice ? parseFloat(values.salePrice) : undefined,
        // Assuming `values.images` contains the image data for the one-to-many relationship
        // images: {
        //   create: []
        // },
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