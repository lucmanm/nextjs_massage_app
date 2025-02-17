"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const SwiperSlider = ({
  className,
  data,
}: {
  className?: string;
  data: { secure_url: string }[];
}) => {
  return (
    <div className={cn("relative w-full px-0", className)}>
      {/* Adds space on both sides */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop
        spaceBetween={50} // Adjusts gap between slides
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full"
      >
        {data.length ? (
          data.map((image, index) => (
            <SwiperSlide
              key={index}
              className="my-12 flex items-center justify-center rounded-lg bg-white shadow-md"
              style={{ maxWidth: "90%", minWidth: "300px" }} // Controls slide width
            >
              <div className="relative flex h-[520px] w-full items-center justify-center max-sm:h-52">
                <Image
                  src={image.secure_url}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div className="container mx-auto my-4 border text-center text-red-600">
            Slider Data not available
          </div>
        )}
      </Swiper>
    </div>
  );
};
