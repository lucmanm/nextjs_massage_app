import GallerySection from "@/components/gallery-section";

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GallerySection />
      </div>
    </div>
  );
}
