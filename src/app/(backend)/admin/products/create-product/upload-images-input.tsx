"use client";

import { Fragment, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImageIcon, Save, Trash } from "lucide-react";
import Image from "next/image";

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

export default function UploadImageInput() {
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

  const onSubmit = (data: ImageUploadForm) => {
    console.log("Uploading Images:", data);
  };

  return (
    <div className="w-full space-y-4 rounded-md border p-4">
      <h2 className="border bg-slate-100 px-4 text-lg font-semibold">
        Slider Images
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Image Previews */}

        {selectedImages.length > 0 ? (
          <div className="flex gap-4">
            {selectedImages.map((image, index) => (
              <Card
                key={index}
                className="relative aspect-square h-40 w-40 overflow-hidden object-contain"
              >
                <Button
                  type="button"
                  size="icon"
                  className="absolute right-1 top-1 size-7 rounded-full bg-red-500 p-1 text-white"
                  onClick={() => removeImage(index)}
                >
                  <Trash size={16} />
                </Button>

                <Image
                  src={image.url}
                  alt="Selected"
                  className="aspect-square h-40 w-40 overflow-hidden rounded"
                  width={500}
                  height={500}
                />
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
