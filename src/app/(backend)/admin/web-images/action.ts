"use server";

import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(formData: FormData) {
    const files = [
        formData.get("imageOne") as File,
        formData.get("imageTwo") as File,
    ].filter((file) => file && file.size > 0); // Filter out empty files

    if (files.length === 0) {
        throw new Error("No valid files selected");
    }

    try {
        // Upload all files to Cloudinary
        const uploadPromises = files.map((file) => {
            return new Promise((resolve, reject) => {
                file.arrayBuffer().then((arrayBuffer) => {
                    const buffer = Buffer.from(arrayBuffer);

                    cloudinary.uploader
                        .upload_stream(
                            {
                                tags: ["nextjs-server-actions-upload-sneakers"],
                                upload_preset: "touchMesssage",
                            },
                            function (error, result) {
                                if (error) {
                                    reject(error);
                                    return;
                                }
                                resolve(result);
                            }
                        )
                        .end(buffer);
                });
            });
        });

        // Wait for all uploads to complete
        await Promise.all(uploadPromises);

        // Revalidate the path to refresh the data
        revalidatePath("/admin/web-images");

        return { success: true, message: "Images uploaded successfully!" };
    } catch (error) {
        console.error("Failed to upload images:", error);
        throw new Error("Failed to upload images. Please try again.");
    }
}


export async function uploadSliderImages(formData: FormData) {
    const files = Array.from(formData.values()).filter(
        (file) => file instanceof File && file.size > 0
    );


    if (files.length === 0) {
        throw new Error("No valid files selected");
    }

    try {
        // Upload all files to Cloudinary
        const uploadPromises = files.map((file) => {
            return new Promise((resolve, reject) => {
                (file as File).arrayBuffer().then((arrayBuffer) => {
                    const buffer = Buffer.from(arrayBuffer);

                    cloudinary.uploader
                        .upload_stream(
                            {
                                tags: ["slider-image"],
                                upload_preset: "touchMassage",
                            },
                            function (error, result) {
                                if (error) {
                                    reject(error);
                                    return;
                                }
                                resolve(result);
                            }
                        )
                        .end(buffer);
                });
            });
        });

        // Wait for all uploads to complete
        await Promise.all(uploadPromises);

        // Revalidate the path to refresh the data
        revalidatePath("/admin/web-images");

        return { success: true, message: "Images uploaded successfully!" };
    } catch (error) {
        console.error("Failed to upload images:", error);
        throw new Error("Failed to upload images. Please try again.");
    }
}