import React from "react";
import { toast } from "react-toastify";
import { deleteProduct } from "../product.action";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Edit, MoreHorizontal, Trash2 } from "lucide-react";

const onDelete = async (productID: string) => {
  try {
    const response = await deleteProduct(productID);

    if (response.status === 200) {
      toast.success(response.message);
    } else {
      toast.success(response.message);
    }
  } catch {
    toast.warning("CATCH ERROR");
  }
};

export default function CellAction({ productID }: { productID: string }) {
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
        <DropdownMenuItem onClick={() => onDelete(productID)}>
          <Trash2 /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
