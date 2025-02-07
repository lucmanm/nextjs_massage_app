import ConnectWithUs from "@/components/connect-with-us";
import FeaturesSection from "@/components/features-section";
import GallerySection from "@/components/gallery-section";
import Testimonials from "@/components/testimonials";
import SwiperSlider from "@/app/(frontend)/wide-slider";

export default function Home() {
  return (
    <div>
      <SwiperSlider className="py-4" />
      <div className="container mx-auto py-8 space-y-8 max-sm:px-2">
        <FeaturesSection />
        <GallerySection />
      </div>
      <div className="py-16 px-4 bg-gradient-to-b from-blue-100 to-blue-50 space-y-8">
        <Testimonials />
        <ConnectWithUs className="mx-auto max-w-7xl" />
      </div>
    </div>
  );
}
