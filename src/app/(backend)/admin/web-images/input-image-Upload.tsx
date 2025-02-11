"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ImageUploadProps {
  id: string;
  name: string;
  label: string;
}

export function InputImageUpload({ id, name, label }: ImageUploadProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setSelectedImage(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative size-40">
      <Input
        id={id}
        type="file"
        name={name}
        onChange={handleImageChange}
        className={`mt-4 size-40 aspect-square object-contain border rounded-md hover:cursor-pointer ${
          selectedImage && "hidden"
        }`}
        aria-label={label}
      />
      {selectedImage && (
        <>
          <Image
            src={selectedImage}
            alt={`Selected ${label}`}
            width={300}
            height={300}
            className="mt-4 size-40 aspect-square object-contain border rounded-md hover:cursor-pointer"
          />
          <X
            className="size-7 text-red-800 absolute top-0 right-0 hover:drop-shadow-lg hover:text-red-600 hover:cursor-pointer"
            onClick={handleRemoveImage}
            aria-label={`Remove ${label}`}
          />
        </>
      )}
    </div>
  );
}