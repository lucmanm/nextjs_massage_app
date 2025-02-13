"use server"
import { v2 as cloudinary } from "cloudinary";
import { z } from "zod";
import { productFormSchema } from "./product-form";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// export async function createProduct(values: z.infer<typeof productFormSchema>) {

//   try {

//     const checkProduct = await prisma.product.findFirst({
//       where: {
//         OR: [
//           { title: values.title },
//           { description: values.description },
//         ],
//       },
//     });

//     if (checkProduct) {
//       return { status: 400, body: { error: "Product with the same title or description already exists." } };
//     }

//     await prisma.product.create({
//       data: {
//         title: values.title,
//         description: values.description,
//         price: parseFloat(values.price),
//         salePrice: values.salePrice ? parseFloat(values.salePrice) : undefined,
//         // Assuming `values.images` contains the image data for the one-to-many relationship
//         // images: {
//         //   create: []
//         // },
//       },
//     });

//     return { status: 200, body: { message: "Product created successfully." } };

//   } catch {

//     return {
//       status: 500,
//       body: {
//         error: "Internal server error"
//       }
//     }
//   }
// }

export async function uploadImage(values: z.infer<typeof productFormSchema>) {
  const file = values.image;

  if (!file) {
    console.error('No file selected');
    return;
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream({
      tags: ['nextjs-server-actions-upload-sneakers'],
      upload_preset: 'touchMesssage'
    }, function (error, result) {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    })
      .end(buffer);
  });
}