"use client";

import { Fragment, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImageIcon, Save, Trash } from "lucide-react";
import Image from "next/image";
import { deleteResourcesByPublicIds, uploadSliderImages } from "./action";
import { toast } from "react-toastify";

const imageSchema = z.object({
  images: z
    .array(
      z.object({
        file: z.instanceof(File),
        url: z.string(),
      }),
    )
    .min(1, "At least one image is required"),
});

type ImageUploadForm = z.infer<typeof imageSchema>;

export default function UploadSliderImages({
  items,
}: {
  items: { secure_url: string; public_id: string }[];
}) {
  const [selectedImages, setSelectedImages] = useState<
    { file: File; url: string }[]
  >([]);

  const { handleSubmit, control, setValue } = useForm<ImageUploadForm>({
    resolver: zodResolver(imageSchema),
    defaultValues: { images: [] },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setSelectedImages((prev) => [...prev, ...newImages]);
    setValue("images", [...selectedImages, ...newImages]);
  };

  const removeImage = (index: number) => {
    const updatedImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(updatedImages);
    setValue("images", updatedImages);
  };

  const onSubmit = async (data: ImageUploadForm) => {
    const formData = new FormData();
    data.images.forEach((image, index) => {
      formData.append(`image${index}`, image.file);
    });

    try {
      await uploadSliderImages(formData);
      toast.success("Images uploaded successfully!");
    } catch (error) {
      console.error("Failed to upload images:", error);
      alert("Failed to upload images. Please try again.");
    }
  };

  return (
    <div className="w-full space-y-4 rounded-md border p-4">
      <Card className="rounded-sm shadow-none">
        <h2 className="px-4 text-lg font-semibold">Slider Images</h2>
      </Card>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Image Previews */}

        {selectedImages.length > 0 || items.length ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {items.map((image, index) => (
              <Card
                key={index}
                className="relative aspect-video overflow-hidden shadow-none"
              >
                <Image
                  src={image.secure_url}
                  alt="Selected"
                  className="h-full w-full object-contain"
                  width={1200}
                  height={600}
                />

                <Button
                  type="button"
                  size="icon"
                  className="absolute right-1 top-1 size-7 rounded-full bg-red-500 p-1 text-white"
                  onClick={async() => {await deleteResourcesByPublicIds(image.public_id)}}
                >
                  <Trash size={16} />
                </Button>
              </Card>
            ))}

            {selectedImages.map((image, index) => (
              <Card
                key={index}
                className="relative aspect-video overflow-hidden shadow-none"
              >
                <Image
                  src={image.url}
                  alt="Selected"
                  className="h-full w-full object-contain"
                  width={1200}
                  height={600}
                />

                <Button
                  type="button"
                  size="icon"
                  className="absolute right-1 top-1 size-7 rounded-full bg-red-500 p-1 text-white"
                  onClick={() => removeImage(index)}
                >
                  <Trash size={16} />
                </Button>
              </Card>
            ))}
          </div>
        ) : (
          <ImageIcon className="size-40 text-gray-300" />
        )}

        {/* File Input */}
        <Controller
          name="images"
          control={control}
          render={({ fieldState }) => (
            <Fragment>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="imageUpload"
              />
              <label
                htmlFor="imageUpload"
                className="block w-fit cursor-pointer rounded-md border border-dashed p-1 text-center"
              >
                Click to select images
              </label>
              {fieldState.error && (
                <p className="text-sm text-red-500">
                  {fieldState.error.message}
                </p>
              )}
            </Fragment>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" className="w-fit">
          <Save />
          Save
        </Button>
      </form>
    </div>
  );
}
