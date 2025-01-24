import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Emily Roberts",
    rating: 5,
    text: "Touch Massage has rejuvenated my spirit. Their personalized treatments have melted away my stress, leaving me revitalized and ready to take on the world!",
  },
  {
    name: "David Lee",
    rating: 5,
    text: "Every visit to Touch Massage has been nothing short of extraordinary. Their skilled therapists have taken my wellness to new heights and provided me with a sanctuary of calm.",
  },
  {
    name: "Sofia Martinez",
    rating: 5,
    text: "Touch Massage is a sanctuary of relaxation! Their deep tissue therapy swiftly eased my tension, and now I leave every session feeling completely renewed.",
  },
];

export default function Testimonials() {
  return (

      <div className="max-w-6xl mx-auto space-y-4">
        <h2 className="text-4xl font-bold text-center">Our Happy Clients</h2>
        <p className="text-center text-muted-foreground">Hear from those we&apos;ve transformed</p>
        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              <Card className="relative z-10">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Customer</div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                </CardContent>
              </Card>
              <div className="absolute -right-2 -top-2 text-6xl text-slate-400 z-20">&quot;</div>
              <div className="absolute -left-2 -bottom-2 text-6xl text-slate-400 rotate-180 z-20">&quot;</div>
            </div>
          ))}
        </div>
      </div>

  );
}
