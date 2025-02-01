"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import { cn } from "@/lib/utils";

const SwiperSlider = ({className}: {className?: string}) => {
  const images = [
    "https://res.cloudinary.com/dzdcszrob/image/upload/v1727087770/eshop/wmv4wxjldcokpaknltkv.png",
    "https://res.cloudinary.com/dzdcszrob/image/upload/v1727087744/eshop/tuibmrw53hqymvhvmo6r.png",
    "https://res.cloudinary.com/dzdcszrob/image/upload/v1727087721/eshop/xx62uahbhnp5hli9d1aa.png",
  ];

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
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center bg-white rounded-lg shadow-md my-12"
            style={{ maxWidth: "90%", minWidth: "300px" }} // Controls slide width
          >
            <div className="w-full h-[420px] max-sm:h-52 relative flex justify-center items-center ">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
