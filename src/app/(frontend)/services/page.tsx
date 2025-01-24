import GallerySection from "@/components/gallery-section";

const services = [
  {
    name: "Swedish Massage",
    description: "Relaxing massage to ease tension and promote circulation",
    duration: "60 min",
    price: "$80",
  },
  {
    name: "Deep Tissue Massage",
    description: "Targets deep layers of muscle to relieve chronic pain",
    duration: "60 min",
    price: "$90",
  },
  {
    name: "Hot Stone Massage",
    description: "Uses heated stones to melt away tension",
    duration: "75 min",
    price: "$100",
  },
  {
    name: "Aromatherapy Massage",
    description: "Combines massage with essential oils for ultimate relaxation",
    duration: "60 min",
    price: "$85",
  },
];

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
