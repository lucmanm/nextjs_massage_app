import { getProducts } from "@/actions/products";
import SwiperSlider from "@/app/(frontend)/wide-slider";
import ConnectWithUs from "@/components/connect-with-us";
import GallerySection from "@/components/gallery-section";
import Testimonials from "@/components/testimonials";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export default async function Home() {
  const { resources: slidersData } = await cloudinary.api.resources_by_tag('slider-image', { context: true });
   const products = await getProducts()

  return (
    <div className="w-full">
      <SwiperSlider data={slidersData}/>
      <div className="container mx-auto py-8 space-y-8 max-sm:px-2">
        {/* <FeaturesSection /> */}
        <GallerySection title="Our Services" data={products}/>
      </div>
      <div className="py-16 px-4 bg-gradient-to-b from-blue-100 to-blue-50 space-y-8">
        <Testimonials />
        <ConnectWithUs className="mx-auto max-w-7xl" />
      </div>
    </div>
  );
}
