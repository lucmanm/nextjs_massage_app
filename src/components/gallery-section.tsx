import { Product } from "@prisma/client";
import { Clock, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

interface TProduct {
  title: string;
  data: (Product & {
    images: {
      id: string;
      url: string;
      productId: string;
    }[];
  })[];
}

export default function GallerySection({ data, title }: TProduct) {
  return (
    <section className="py-8 lg:py-16">
      <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
        {title}
      </h2>
      <div className="grid gap-6 max-sm:grid-cols-2 max-sm:gap-3 lg:grid-cols-4">
        {!data.length ? (
          <div className="rounded bg-slate-100 text-center max-sm:col-span-2 lg:col-span-4">
            No Product Avaibale
          </div>
        ) : (
          data.map((item, index) => (
            <div
              key={index}
              className="flex h-full flex-col items-stretch overflow-hidden rounded-lg border border-blue-200 bg-white transition-shadow hover:cursor-pointer hover:shadow-lg"
            >
              <div className="relative h-48 w-full md:h-56">
                <Image
                  src={item.images[0].url}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
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
                <p className="flex-grow text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
              <div className="p-4">
                <Button className="w-full font-semibold">
                  <ShoppingBag />
                  <span>Book Now</span>
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
