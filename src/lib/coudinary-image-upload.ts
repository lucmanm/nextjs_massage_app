"use server"
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(image: File): Promise<{ secure_url?: string, status?: number, body?: { message: string } }> {

    const file = image;

    if (!file) {
        return { status: 400, body: { message: "No file selected" } };
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const response = await new Promise<{ secure_url: string }>(
        (resolve, reject) => {
            cloudinary.uploader
                .upload_stream(
                    {
                        tags: ["product-image"],
                        upload_preset: "touchMassage",
                    },
                    function (error, result) {
                        if (error) {
                            reject(error);
                            return;
                        }
                        if (result) {
                            resolve({ secure_url: result.secure_url });
                        } else {
                            reject(new Error("Upload result is undefined"));
                        }
                    },
                )
                .end(buffer);
        },
    );

    return response;
}
