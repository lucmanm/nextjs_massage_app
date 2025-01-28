import ConnectWithUs from "@/components/connect-with-us";
import FeaturesSection from "@/components/features-section";
import GallerySection from "@/components/gallery-section";
import HeroSection from "@/app/(backend)/admin/_components/hero-section";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto py-8 space-y-8 max-sm:px-2">
        <HeroSection />
        <FeaturesSection />
        <GallerySection />
      </div>
      <div className="py-16 px-4 bg-gradient-to-b from-blue-100 to-blue-50 space-y-8">
        <Testimonials />
        <ConnectWithUs />
      </div>
    </div>
  );
}
