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
  cardName: string
}

export function InputImageUpload({ id, name, label, cardName }: ImageUploadProps) {
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
    <section className="size-40 space-y-2 ">
      <Card className="relative shadow-inner bg-white overflow-hidden">

      <Input
      id={id}
      type="file"
      name={name}
      accept=".jpg,.jpeg,.png"
      onChange={handleImageChange}
      className={`size-40 aspect-square object-contain  hover:cursor-pointer ${
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
        className="size-40 aspect-square object-contain  hover:cursor-pointer"
        />
        <X
        className="size-7 text-red-800 absolute top-0 right-0 hover:drop-shadow-lg hover:text-red-600 hover:cursor-pointer"
        onClick={handleRemoveImage}
        aria-label={`Remove ${label}`}
        />
      </>
      )}
      </Card>
      <Card className="rounded-sm font-bold text-center capitalize">{cardName}</Card>
    </section>
  );
}