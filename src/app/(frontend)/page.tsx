import ConnectWithUs from "@/components/connect-with-us";
import FeaturesSection from "@/components/features-section";
import GallerySection from "@/components/gallery-section";
import Testimonials from "@/components/testimonials";
import SwiperSlider from "@/app/(frontend)/wide-slider";
import { getProducts } from "@/actions/products";

export default async function Home() {

   const products = await getProducts()

  return (
    <div className="w-full">
      <SwiperSlider/>
      <div className="container mx-auto py-8 space-y-8 max-sm:px-2">
        <FeaturesSection />
        <GallerySection title="Our Services" data={products}/>
      </div>
      <div className="py-16 px-4 bg-gradient-to-b from-blue-100 to-blue-50 space-y-8">
        <Testimonials />
        <ConnectWithUs className="mx-auto max-w-7xl" />
      </div>
    </div>
  );
}
