"use client";

import { useMenuStore } from "@/hook/useMenuStore";
import { BedDouble, Home, Mail, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: BedDouble, label: "Service", href: "/services" },
  { icon: Mail, label: "Contact", href: "/contact" },
  { icon: User, label: "Account", href: "/account" },
];

export function BottomNav() {
  const pathname = usePathname();
  const { toggleMenu } = useMenuStore();

  const handleAccountClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    console.log("Account clicked");
    toggleMenu(); // Close the menu
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-background border-t md:hidden">
      <ul className="grid h-full grid-cols-4">
        {menuItems.map((item) => (
          <li key={item.href}>
            {item.label === "Account" ? (
              <div
                onClick={handleAccountClick}
                className={`flex h-full w-full flex-col items-center justify-center space-y-1 ${
                  pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-primary cursor-pointer"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-xs">{item.label}</span>
              </div>
            ) : (
              <Link
                href={item.href}
                className={`flex h-full w-full flex-col items-center justify-center space-y-1 ${
                  pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-xs">{item.label}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
