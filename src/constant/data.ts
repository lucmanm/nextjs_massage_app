import { BedDoubleIcon, BookCheck, Contact2Icon, Home, Mail } from "lucide-react";


export const authMenuData = [
  {
    href: "/services",
    title: "Services",
    icon: BedDoubleIcon,
  },
  {
    href: "/login",
    title: "Book Now",
    icon: BookCheck,
  },
  {
    href: "/contact",
    title: "Contact",
    icon: Contact2Icon,
  },
];

export const menuData = [
  {
    href: "/",
    title: "Home",
    icon: Home,
    mobileView: false,
  },
  {
    href: "/services",
    title: "Services",
    icon: BedDoubleIcon,
    mobileView: true,
  },
  {
    href: "/contact",
    title: "Contact",
    icon: Mail,
    mobileView: true,
  },
  {
    href: "/book",
    title: "Book Now",
    icon: BookCheck,
    mobileView: true,
  },
];