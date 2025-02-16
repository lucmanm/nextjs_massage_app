"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import { cn } from "@/lib/utils";

const SwiperSlider = ({ className, data }: { className?: string, data: { secure_url: string }[] }) => {

  return (
    <div className={cn("relative w-full px-0 ", className)}>
      {/* Adds space on both sides */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
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
        {data.length ? data.map((image, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center bg-white rounded-lg shadow-md my-12"
            style={{ maxWidth: "90%", minWidth: "400px" }} // Increased minWidth for larger slides
          >
            <div className="w-full h-[600px] max-sm:h-52 relative flex justify-center items-center ">
              <Image
                src={image.secure_url}
                alt={`Slide ${index + 1}`}
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100} // Increase image quality to 100%
                priority={index === 0} // Prioritize loading the first image
              />
            </div>
          </SwiperSlide>
        ))
        :
        <div className="border container mx-auto my-4 text-red-600 text-center">Slider Data not available</div>
      }
      </Swiper>
    </div>
  );
};

export default SwiperSlider;