import { getProducts } from "@/actions/products";
import GallerySection from "@/components/gallery-section";

export default async function Services() {
  const products = await getProducts()

  return (
    <div className="container mx-auto max-sm:px-4 py-4">
      {/* <h1 className="text-4xl font-bold mb-6">Our Services</h1> */}
      <div>
        <GallerySection title="Our Services" data={products}/>
      </div>
    </div>
  );
}
