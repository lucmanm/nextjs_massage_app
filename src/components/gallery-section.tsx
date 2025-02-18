import { Product } from "@prisma/client";
import CardService from "./card-service";

interface TProduct {
  title: string;
  data: (Product & {
    images: {
      id: string;
      url: string;
      productId: string;
    }[];
  })[];
}

export default function GallerySection({ data, title }: TProduct) {
  return (
    <section className="py-8 lg:py-16">
      <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
        {title}
      </h2>
      <div className="grid gap-6 max-sm:grid-cols-2 max-sm:gap-3 lg:grid-cols-4">
        {!data.length ? (
          <div className="rounded bg-slate-100 text-center max-sm:col-span-2 lg:col-span-4">
            No Product Avaibale
          </div>
        ) : (
          data.map((item, index) => <CardService key={index} item={item} />)
        )}
      </div>
    </section>
  );
}
