import React from "react";
import { Button } from "./ui/button";
import { Clock, ShoppingBag } from "lucide-react";
import NextImage from "next/image";
import { Image as PrismaImage, Product } from "@prisma/client";
import Link from "next/link";

interface TProduct {
  item: Product & { images: PrismaImage[] };
}
export default function CardService({ item }: TProduct) {
  return (
    <Link
      href={`/services/${item.description}`}
      className="flex h-full flex-col items-stretch overflow-hidden rounded-lg border border-blue-200 bg-white transition-shadow hover:cursor-pointer hover:shadow-lg"
    >
      <div className="relative h-48 w-full md:h-56">
        <NextImage
          src={item.images[0].url}
          alt={item.title}
          className="rounded-t-lg object-cover"
          fill
          sizes="500"
          priority
        />

        {/* Price */}
        <div className="absolute bottom-2 right-2 rounded-full bg-white px-4">
          <span className="mb-2 text-lg font-semibold text-blue-600">
            {item.price} SAR
          </span>
        </div>
      </div>
      <div className="flex flex-grow flex-col p-4">
        <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
        {/* Time */}
        <div className="mb-2 flex items-center space-x-2">
          <Clock className="h-6 w-6 text-blue-600" />
          <p className="flex-grow text-lg font-semibold text-blue-600">
            {item.duration}
          </p>
        </div>
        <p className="flex-grow text-sm text-gray-600">{item.description}</p>
      </div>
      <div className="p-4">
        <Button className="w-full font-semibold">
          <ShoppingBag />
          <span>Book Now</span>
        </Button>
      </div>
    </Link>
  );
}
