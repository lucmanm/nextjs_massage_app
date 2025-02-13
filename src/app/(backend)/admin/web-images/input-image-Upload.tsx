"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ImageUploadProps {
  id: string;
  name: string;
  label: string;
  cardName: string;
}

export function InputImageUpload({
  id,
  name,
  label,
  cardName,
}: ImageUploadProps) {
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
    <section className="size-40 space-y-2">
      <Card className="relative overflow-hidden bg-white shadow-inner">
        <Input
          id={id}
          type="file"
          name={name}
          accept=".jpg,.jpeg,.png"
          onChange={handleImageChange}
          className={`aspect-square size-40 object-contain hover:cursor-pointer ${
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
              className="aspect-square size-40 object-contain hover:cursor-pointer"
            />
            <X
              className="absolute right-0 top-0 size-7 text-red-800 hover:cursor-pointer hover:text-red-600 hover:drop-shadow-lg"
              onClick={handleRemoveImage}
              aria-label={`Remove ${label}`}
            />
          </>
        )}
      </Card>
      <Card className="rounded-sm text-center font-bold capitalize">
        {cardName}
      </Card>
    </section>
  );
}
