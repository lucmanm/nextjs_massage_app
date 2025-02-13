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

export const galleryItems = [
  {
    title: "Soothing Sanctuary",
    description:
      "Immerse yourself in the serene ambiance of Touch Massage, where rejuvenation is at the forefront. Discover our peaceful therapy environments today!",
    image:
      "https://res.cloudinary.com/dzdcszrob/image/upload/v1733872503/icons/qajzdl5t44y0uvtfuhmz.svg",
    price: 500,
    duration: "60 min",
    salesPrice: 0.00,
    isActive: true

  },
  {
    title: "Tailored Wellness",
    description:
      "Explore an array of specialized massage techniques that address your unique wellness needs, ensuring personalized therapy experiences.",
    image:
      "https://res.cloudinary.com/dzdcszrob/image/upload/v1733872503/icons/qajzdl5t44y0uvtfuhmz.svg",
    price: 500,
    duration: "60 min",
    salesPrice: 0.00,
    isActive: true
  },
  {
    title: "Exquisite Comfort",
    description:
      "Each image highlights the elegant environments and luxurious service quality. Experience an ambiance of true relaxation and rejuvenation.",
    image:
      "https://res.cloudinary.com/dzdcszrob/image/upload/v1733872503/icons/qajzdl5t44y0uvtfuhmz.svg",
    price: 500,
    duration: "60 min",
    salesPrice: 0.00,
    isActive: true
  },
  {
    title: "Transformative Experiences",
    description:
      "Visualize your journey toward wellness through our gallery, showcasing the transformative services that can elevate your health and happiness.",
    image:
      "https://res.cloudinary.com/dzdcszrob/image/upload/v1733872503/icons/qajzdl5t44y0uvtfuhmz.svg",
    price: 500,
    duration: "60 min",
    salesPrice: 0.00,
    isActive: true
  },
  {
    title: "Experience Holistic Wellness",
    description:
      "Embrace self-care at Touch Massage with our specialized treatments that cater to your well-being. Step into an environment that promotes relaxation and balance.",
    image:
      "https://res.cloudinary.com/dzdcszrob/image/upload/v1733872503/icons/qajzdl5t44y0uvtfuhmz.svg",
    price: 500,
    duration: "60 min",
    salesPrice: 0.00,
    isActive: true
  },
  {
    title: "A Visual Journey",
    description:
      "Marvel at the artistry of our spaces that are crafted to provide an exceptional experience, emphasizing the comfort and tranquility awaited within.",
    image:
      "https://res.cloudinary.com/dzdcszrob/image/upload/v1733872503/icons/qajzdl5t44y0uvtfuhmz.svg",
    price: 500,
    duration: "60 min",
    salesPrice: 0.00,
    isActive: true
  },
  {
    title: "Achieve Inner Balance",
    description:
      "Allow us to guide you on a path of rejuvenation. Our gallery exemplifies the peaceful environment that makes your visit to Touch Massage special and impactful.",
    image:
      "https://res.cloudinary.com/dzdcszrob/image/upload/v1733872503/icons/qajzdl5t44y0uvtfuhmz.svg",
    price: 500,
    duration: "60 min",
    salesPrice: 0.00,
    isActive: true
  },
];

export const imagesPlaceHolder = "https://res.cloudinary.com/dzdcszrob/image/upload/v1733872503/icons/qajzdl5t44y0uvtfuhmz.svg"