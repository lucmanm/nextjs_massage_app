import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Clock, ShoppingBag } from "lucide-react";

export default function GallerySection() {
  const galleryItems = [
    {
      title: "Soothing Sanctuary",
      description:
        "Immerse yourself in the serene ambiance of Touch Massage, where rejuvenation is at the forefront. Discover our peaceful therapy environments today!",
      image:
        "https://plus.unsplash.com/premium_photo-1661274145140-5f04566233c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "500",
      duration: "60 min",
    },
    {
      title: "Tailored Wellness",
      description:
        "Explore an array of specialized massage techniques that address your unique wellness needs, ensuring personalized therapy experiences.",
      image:
        "https://plus.unsplash.com/premium_photo-1661274145140-5f04566233c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "500",
      duration: "60 min",
    },
    {
      title: "Exquisite Comfort",
      description:
        "Each image highlights the elegant environments and luxurious service quality. Experience an ambiance of true relaxation and rejuvenation.",
      image:
        "https://plus.unsplash.com/premium_photo-1661274145140-5f04566233c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "500",
      duration: "60 min",
    },
    {
      title: "Transformative Experiences",
      description:
        "Visualize your journey toward wellness through our gallery, showcasing the transformative services that can elevate your health and happiness.",
      image:
        "https://plus.unsplash.com/premium_photo-1661274145140-5f04566233c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "500",
      duration: "60 min",
    },
    {
      title: "Experience Holistic Wellness",
      description:
        "Embrace self-care at Touch Massage with our specialized treatments that cater to your well-being. Step into an environment that promotes relaxation and balance.",
      image:
        "https://plus.unsplash.com/premium_photo-1661274145140-5f04566233c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "500",
      duration: "60 min",
    },
    {
      title: "A Visual Journey",
      description:
        "Marvel at the artistry of our spaces that are crafted to provide an exceptional experience, emphasizing the comfort and tranquility awaited within.",
      image:
        "https://plus.unsplash.com/premium_photo-1661274145140-5f04566233c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "500",
      duration: "60 min",
    },
    {
      title: "Achieve Inner Balance",
      description:
        "Allow us to guide you on a path of rejuvenation. Our gallery exemplifies the peaceful environment that makes your visit to Touch Massage special and impactful.",
      image:
        "https://plus.unsplash.com/premium_photo-1661274145140-5f04566233c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "500",
      duration: "60 min",
    },
  ];

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
