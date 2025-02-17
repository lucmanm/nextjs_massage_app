"use client";
import { buttonVariants } from "@/components/ui/button";
import { NavProps } from "@/constant/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";


export default function NavLink({ item }: { item: NavProps }) {
  const params = useParams<{ accountSlug: string }>();
  const path = decodeURIComponent(params.accountSlug);

  return (
    <Link
      href={`/account/${item.title.toLowerCase()}`}
      className={cn(
        buttonVariants({ size: "sm" }), // Base button styles
        "justify-start bg-transparent capitalize text-muted-foreground hover:text-muted",
        path === item.title.toLowerCase() // Active state condition
          ? "bg-blue-600 capitalize text-muted" // Active styles
          : "font-normal", // Common styles
      )}
    >
      <item.icon className="mr-2 size-6 max-sm:size-4" />
      {/* Icon with responsive sizing */}
      {item.title}
    </Link>
  );
}
