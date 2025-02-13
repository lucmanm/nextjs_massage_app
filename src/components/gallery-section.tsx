import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Clock, ShoppingBag } from "lucide-react";
import { galleryItems } from "@/constant/data";

export default function GallerySection() {


  return (
    <section className="py-8 lg:py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Exquisite Gallery</h2>
      <div className="grid max-sm:grid-cols-2 lg:grid-cols-4 gap-6 max-sm:gap-3 ">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col h-full items-stretch bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow hover:cursor-pointer border border-blue-200"
          >
            <div className="relative w-full h-48 md:h-56">
              <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" className="rounded-t-lg" />

              {/* Price */}
              <div className="absolute bottom-2 right-2 bg-white rounded-full px-4">
                <span className="text-lg font-semibold mb-2 text-blue-600">{item.price} SAR</span>
              </div>
            </div>
            <div className="flex flex-col flex-grow p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              {/* Time */}
              <div className="flex items-center mb-2 space-x-2">
                <Clock className="h-6 w-6 text-blue-600" />
                <p className="text-lg font-semibold text-blue-600 flex-grow ">{item.duration}</p>
              </div>
              <p className="text-sm text-gray-600 flex-grow">{item.description}</p>
            </div>
            <div className="p-4">
              <Button className="w-full  font-semibold">
                <ShoppingBag />
                <span>Book Now</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
