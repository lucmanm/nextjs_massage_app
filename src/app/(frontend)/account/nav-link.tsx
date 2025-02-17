"use client";
import { buttonVariants } from "@/components/ui/button";
import { NavProps } from "@/constant/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  CircleDollarSign,
  CreditCard,
  Heart,
  LucideIcon,
  MapPinned,
  Star,
  UserRoundPen,
} from "lucide-react";

const iconComponents: Record<string, LucideIcon> = {
  UserRoundPen,
  CircleDollarSign,
  MapPinned,
  Heart,
  Star,
  CreditCard,
};

export default function NavLink({ item }: { item: NavProps }) {
  const pathname = usePathname();
  const IconComponent = iconComponents[item.icon];

  // Determine if the current link is active
  const isActive = pathname === `/account/${item.title.toLowerCase()}`;

  return (
    <Link
      href={`/account/${item.title.toLowerCase()}`}
      className={cn(
        buttonVariants({ size: "sm" }), // Base button styles
        "justify-start bg-transparent capitalize text-muted-foreground hover:text-muted",
        isActive // Active state condition
          ? "bg-blue-600 capitalize text-muted" // Active styles
          : "font-normal", // Common styles
      )}
    >
      {IconComponent && <IconComponent className="mr-2 size-6 max-sm:size-4" />}
      {/* Icon with responsive sizing */}
      {item.title}
    </Link>
  );
}
