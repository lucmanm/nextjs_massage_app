"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => setIsOpen(false);

  return (
    <header className="text-primar">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Lucmanm Touch
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
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6 text-slate-950" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetTitle className="hidden">x</SheetTitle>
            <nav className="flex flex-col space-y-2 mt-8">
              {menuData.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? "bg-slate-950 text-slate-100 "
                      : "hover:bg-blue-600 rounded-sm hover:text-slate-100"
                  } text-lg py-1 px-4 rounded-sm`}
                  onClick={closeSheet}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
