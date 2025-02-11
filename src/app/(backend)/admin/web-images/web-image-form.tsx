"use client";

import ButtonCustomized from "@/components/button-customized";
import { Save } from "lucide-react";
import { useTransition } from "react";
import { toast } from "react-toastify";
import { uploadImage } from "./action";
import { InputImageUpload } from "./input-image-Upload";

export function WebImageForm() {
  const [isPending, startTransition] = useTransition();


  async function onSubmit(data: FormData) {
    const fileOne = data.get("imageOne") as File;
    const fileTwo = data.get("imageTwo") as File;

    if (!fileOne && !fileTwo) {
      console.error("No files selected");
      return;
    }

    startTransition(async () => {
      try {
        await uploadImage(data);
        toast.success("Images uploaded successfully!");
      } catch (error) {
        console.error("Failed to upload images:", error);
        alert("Failed to upload images. Please try again.");
      }
    });
  }

  return (
    <section className="w-full p-4">
      <form action={onSubmit} className="space-y-8">
        <div className="flex items-center gap-4">
          <InputImageUpload
            id="pictureOne"
            name="imageOne"
            label="Upload first image"
          />
          <InputImageUpload
            id="pictureTwo"
            name="imageTwo"
            label="Upload second image"
          />
        </div>
        <ButtonCustomized title="Save" icon={Save} formState={isPending} className="w-fit" />
      </form>
    </section>
  );
}