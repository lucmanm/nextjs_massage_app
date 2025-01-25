import { useMenuStore } from "@/hook/useMenuStore";
import { Menu } from "lucide-react"; // Importing the login icon
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { menuData } from "@/constant/data";

export default function MobileSheetMenu() {
  const pathname = usePathname();

  const { isOpen, closeMenu, toggleMenu } = useMenuStore();

  return (
    <Sheet open={isOpen} onOpenChange={toggleMenu}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline" size="icon">
          <Menu className="h-6 w-6 text-slate-950" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col justify-between px-0">
        <div>
          <SheetTitle className="hidden">Menu</SheetTitle>
          <nav className="flex flex-col space-y-2 mt-8 px-4">
            {menuData.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? "bg-slate-950 text-slate-100"
                    : "hover:bg-blue-600 rounded-sm hover:text-slate-100"
                } text-lg py-1 px-4 rounded-sm items-center`}
                onClick={closeMenu}
              >
                <item.icon className="h-6 w-6 inline-block mr-2" />
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
