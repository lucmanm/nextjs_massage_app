"use client";
import { buttonVariants } from "@/components/ui/button";
import { iconComponents, NavProps } from "@/constant/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ item }: { item: NavProps }) {
  const pathname = usePathname();

  const IconComponent = iconComponents[item.icon];

  // Determine if the current link is active
  const isActive = pathname === `/account/${item.title.toLowerCase()}`;

  return (
    <Link
      href={`/account/${item.title.toLowerCase()}`}
      className={cn(
        buttonVariants({ size: "default" }), // Base button styles
        "justify-start border-none bg-transparent capitalize text-slate-700 shadow-none hover:text-muted",
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
