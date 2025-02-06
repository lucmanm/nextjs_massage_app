"use client"; // Required for client-side interactivity

import { useState } from "react";
// import axios from "axios";
import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const ImageUpload = () => {
  const [images, setImages] = useState<string[]>([]); // Array of selected images
  const [uploading, setUploading] = useState(false); // Uploading state

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files as FileList); // Convert FileList to array
    const imagePreviews = files.map((file: Blob) => URL.createObjectURL(file)); // Create preview URLs
    setImages((prev) => [...prev, ...imagePreviews]); // Add to state
  };

  // Handle image upload to Cloudinary
  const handleUpload = async () => {
    setUploading(true);

    try {
      const uploadPromises = images.map(async (image) => {
        const formData = new FormData();
        formData.append("file", image);
        if (process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET && process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
          formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
          formData.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
        } else {
          throw new Error("Cloudinary environment variables are not set");
        }

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            headers: { "content-type": "multipart/form-data" },
            body: formData,
          }
        );

        console.log(response);

        // return response.data.secure_url; // Return the uploaded image URL
      });

      const uploadedUrls = await Promise.all(uploadPromises); // Wait for all uploads to finish
      console.log("Uploaded URLs:", uploadedUrls); // Log the uploaded URLs
      alert("Images uploaded successfully!");
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Error uploading images. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1>Upload Images</h1>
      <Input type="file" accept="image/*" multiple onChange={handleFileChange} />
      <div className="flex flex-wrap mt-5 size-5">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            fill
            alt={`Preview ${index}`}
            className="aspect-square object-cover size-5"
            // style={{ width: "100px", height: "100px", margin: "10px" }}
          />
        ))}
      </div>
      <Button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Images"}
      </Button>
    </div>
  );
};

export default ImageUpload;
