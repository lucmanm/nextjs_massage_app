"use client";

import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type TProduct = {
//   id: string;
//   title: string;
//   description: string;
//   price: number;
//   salePrice: number;
//   isActive: boolean;
//   image: string;
// };

export type ProductWithoutTimestamps = Omit<Product, "createdAt" | "updatedAt">;

export const columns: ColumnDef<ProductWithoutTimestamps>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "salePrice",
    header: "Sale Price",
  },
  {
    accessorKey: "isActive",
    header: "Live",
  },
  {
    accessorKey: "image",
    header: "Image",
  },
];
