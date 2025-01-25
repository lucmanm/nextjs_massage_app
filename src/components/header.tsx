"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import MobileSheetMenu from "./mb-ui/mb-sheet-menu";

const menuData = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/services",
    title: "Services",
  },
  {
    href: "/contact",
    title: "Contact",
  },
  {
    href: "/book",
    title: "Book Now",
  },
];

export default function Header() {
  return (
    <header className="text-primary-900 bg-primary-100 shadow-md">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Touch Massage
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 md:items-center">
          {menuData.map((item) =>
            item.href === "/book" ? (
              <Button key={item.href} asChild>
                <Link
                  href={item.href}
                  className="bg-slate-100 text-slate-950 font-semibold hover:bg-blue-600 hover:text-slate-100"
                >
                  {item.title}
                </Link>
              </Button>
            ) : (
              <Link key={item.href} href={item.href} className="hover:underline">
                {item.title}
              </Link>
            )
          )}
        </div>
        {/* Mobile Menu */}
        <MobileSheetMenu/>
      </nav>
    </header>
  );
}
