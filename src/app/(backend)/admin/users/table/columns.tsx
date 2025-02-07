"use client";

import { User } from "@prisma/client";
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

export type TUser = Pick<User, "email" | "name" | "role">;

export const columns: ColumnDef<TUser>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-center">Name</div>,
    cell: ({ cell }) => <div className="text-center">{cell.getValue() as string}</div>,
  },
  {
    accessorKey: "email",
    header: () => <div className="text-center">Email</div>,
    cell: ({ cell }) => <div className="text-center">{cell.getValue() as string}</div>,
  },
  {
    accessorKey: "role",
    header: () => <div className="text-center">Role</div>,
    cell: ({ cell }) => <div className="text-center">{cell.getValue() as string}</div>,
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
