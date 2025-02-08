import { BedDoubleIcon, BookCheck, Contact2Icon, Home, LucideIcon, Mail, UserCircle } from "lucide-react";


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


type TMenuData = {
  href: string;
  title: "home" | "services" | "contact us" | "book now" | "register" | "Sign-In";
  icon: LucideIcon
  mobileView: boolean;
}

export const menuData: TMenuData[] = [
  {
    href: "/",
    title: "home",
    icon: Home,
    mobileView: false,
  },
  {
    href: "/services",
    title: "services",
    icon: BedDoubleIcon,
    mobileView: true,
  },
  {
    href: "/contact",
    title: "contact us",
    icon: Mail,
    mobileView: true,
  },
  {
    href: "/book",
    title: "book now",
    icon: BookCheck,
    mobileView: true,
  },
  {
    href: "/register",
    title: "register",
    icon: Mail,
    mobileView: false,
  },
  {
    href: "/login",
    title: "Sign-In",
    icon: UserCircle,
    mobileView: false,
  },
];

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export const cartItems: CartItem[] = [
  {
    id: "1",
    name: "Wireless Earbuds",
    price: 79.99,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 199.99,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "3",
    name: "Bluetooth Speaker",
    price: 59.99,
    quantity: 2,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export const imagesPlaceHolder = "https://res.cloudinary.com/dzdcszrob/image/upload/v1733872503/icons/qajzdl5t44y0uvtfuhmz.svg"