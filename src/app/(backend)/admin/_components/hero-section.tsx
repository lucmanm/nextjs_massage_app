import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] w-full overflow-hidden rounded-md">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dzdcszrob/image/upload/v1733872503/icons/qajzdl5t44y0uvtfuhmz.svg"
          alt="Massage therapy treatment"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Transform Your
            <br />
            Well-Being
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
            Unlock a sanctuary of relaxation and rejuvenation at Touch Massage, where expert therapies are tailored to
            elevate your body and mind. Discover a serene escape that caters to your individual wellness needs, designed
            to alleviate stress and restore balance in your life.
          </p>
          <Button size="lg" className="lg:px-6 lg:py-6 lg:text-xl">
            <Link href="/book">Explore Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
