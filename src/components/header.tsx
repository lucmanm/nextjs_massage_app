"use client";

import { menuData } from "@/constant/data";
import Link from "next/link";
import MobileSheetMenu from "./mb-ui/mb-sheet-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="text-primary-900 bg-primary-100 shadow-md">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Touch Massage
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 md:items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="flex items-center capitalize">
                {menuData.map((item) => (
                  <Link key={item.title} href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle({
                        className:
                          pathname === item.href
                            ? "bg-blue-600 text-white"
                            : item.title === "Sign-In"
                            ? "flex space-x-2 border border-blue-600"
                            : "",
                      })}
                    >
                      {item.title === "Sign-In" && <item.icon />}
                      <span>{item.title}</span>
                    </NavigationMenuLink>
                  </Link>
                ))}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* Mobile Menu */}
        <MobileSheetMenu />
      </nav>
    </header>
  );
}
