import { getProducts } from "@/actions/products";
import ConnectWithUs from "@/components/connect-with-us";
import GallerySection from "@/components/gallery-section";
import Testimonials from "@/components/testimonials";
import cloudinary from "@/config/cloudinary";
import { SwiperSlider } from "./wide-slider";

export default async function Home() {
  const { resources: slidersData } = await cloudinary.api.resources_by_tag(
    "slider-image",
    { context: true },
  );
  const products = await getProducts();

  return (
    <div className="w-full">
      <SwiperSlider data={slidersData} />
      <div className="container mx-auto space-y-8 py-8 max-sm:px-2">
        {/* <FeaturesSection /> */}
        <GallerySection title="Our Services" data={products} />
      </div>
      <div className="space-y-8 bg-gradient-to-b from-blue-100 to-blue-50 px-4 py-16">
        <Testimonials />
        <ConnectWithUs className="mx-auto max-w-7xl" />
      </div>
    </div>
  );
}
