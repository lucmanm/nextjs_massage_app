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

