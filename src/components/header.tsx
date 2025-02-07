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
              <NavigationMenuItem>
                {menuData.map(
                  (item) =>
                    (item.title === "Sign-In" && (
                      <Link key={item.title} href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle({ className: "bg-blue-600 text-white " })}
                        >
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    )) || (
                      <Link key={item.title} href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle({
                            className: pathname === item.href ? "bg-blue-600 text-white " : "",
                          })}
                        >
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    )
                )}
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
