import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function FeaturesSection() {
  return (
    <section className="flex flex-col md:flex-row-reverse rounded-lg overflow-hidden bg-white ">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto rounded-md overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1598901865264-4f5f30954532?q=80&w=2097&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Elevate Your Self-Care Experience"
          className="object-cover"
          priority
          fill
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col p-6 md:p-8 space-y-6 md:w-1/2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-800">
          Elevate Your Self-Care Experience
        </h2>

        <div className="space-y-4 text-gray-600">
          <p>
            Immerse yourself in a transformative journey at Touch Massage, where a serene atmosphere meets expert
            therapy tailored to your wellness needs. Experience relief from tension and discomfort within our peaceful
            retreat.
          </p>

          <p>
            From calming Swedish massages to deep tissue therapies that alleviate persistent pain, each treatment is
            personalized to restore harmony between your body and mind. Revel in our beautifully designed spa, crafted
            for your ultimate relaxation.
          </p>
        </div>

        <ul className="space-y-3">
          {[
            "Customized therapies that meet your wellness goals",
            "Professional therapists dedicated to your comfort",
            "Tranquil environment that enhances relaxation",
            "Comprehensive service to support your journey to vitality",
          ].map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="h-2 w-2 bg-blue-600 rounded-full" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div>
          <Button className="px-6 py-6 lg:text-xl w-full">
            Discover Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
