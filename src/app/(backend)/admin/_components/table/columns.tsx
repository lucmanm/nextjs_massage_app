"use client";

import FormatCurrency from "@/lib/format-currency";
import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, MoreHorizontal, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
      return <div className="text-right font-medium">{amount}</div>;
    },
  },
  {
    accessorKey: "isActive",
    header: () => <div className="text-center">Live</div>,
    cell: ({ row }) => {
      const isActive = row.getValue("isActive");
      return (
        <div className="flex items-center justify-center">
          <div className={`rounded-full size-3 ${isActive ? "bg-green-500" : "bg-red-500"}`} />
        </div>
      );
    },
  },
  {
    accessorKey: "image",
    header: "Image",
  },
  {
    accessorKey: "Action",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="*:cursor-pointer">
            <DropdownMenuLabel>Option</DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Edit />
              Update
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash2 /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
