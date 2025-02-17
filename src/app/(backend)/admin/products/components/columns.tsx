"use client";

import FormatCurrency from "@/lib/format-currency";
import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

import CellAction from "./cell-action";
import { ImageIcon } from "lucide-react";

export type ProductWithoutTimestamps = Omit<Product, "createdAt" | "updatedAt">;

export const columns: ColumnDef<ProductWithoutTimestamps>[] = [
  {
    accessorKey: "image",
    header: () => <div className="text-center">Image</div>,
    cell: () => <ImageIcon className="size-24 text-blue-600" />,
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => <div className="w-40">{row.original.title}</div>,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => <div className="w-96">{row.original.description}</div>,
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      const parsedAmount = parseFloat(row.getValue("price"));
      const amount = FormatCurrency({ amount: parsedAmount });
      return <div className="text-right font-medium">{amount}</div>;
    },
  },
  {
    accessorKey: "salePrice",
    header: () => <div className="text-right">Sale Price</div>,
    cell: ({ row }) => {
      const parsedAmount = parseFloat(row.getValue("salePrice"));
      const amount = FormatCurrency({ amount: parsedAmount });
      return (
        <div className="text-right font-medium">
          {isNaN(parsedAmount) ? "0.00" : amount}
        </div>
      );
    },
  },
  {
    accessorKey: "isActive",
    header: () => <div className="text-center">Live</div>,
    cell: ({ row }) => {
      const isActive = row.getValue("isActive");
      return (
        <div className="flex items-center justify-center">
          <div
            className={`size-3 rounded-full ${isActive ? "bg-green-500" : "bg-red-500"}`}
          />
        </div>
      );
    },
  },

  {
    accessorKey: "Action",
    cell: ({ row }) => <CellAction productID={row.original.id} />,
  },
];
