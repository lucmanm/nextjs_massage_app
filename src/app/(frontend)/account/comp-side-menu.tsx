import UserCard from "@/components/user-card";
import NavLink from "./nav-link";
import { CircleDollarSign, CreditCard, Heart, MapPinned, Star, UserRoundPen } from "lucide-react";

export const accountData = [
  {
    title: "Account",
    description: "View, update account information- Change account password.",
    icon: UserRoundPen,
    // variant: "ghost",
  },

  {
    title: "orders",
    description:
      "Track your order, check order status, retum yow product or buy the product again.",
    icon: CircleDollarSign,
    // variant: "ghost",
  },
  {
    title: "address",
    description:
      "Modify your addresses or add the new ad&ess for orders and gifts.",
    icon: MapPinned,
    // variant: "ghost",
  },
  {
    title: "wishlist",
    description:
      "See the items saved to your wishlist. Move them to cart or remove from wishlist",
    icon: Heart,
    // variant: "ghost",
  },

  {
    title: "review",
    description: "View the vyevious reviews you have submitted.",
    icon: Star,
    // variant: "ghost",
  },
  {
    title: "payment options",
    description: "Manage your saved cards. View your balance.",
    icon: CreditCard,
    // label: "",
    // variant: "ghost",
  },
];

export function SideMenu() {
  return (
    <nav className="grid gap-1 border p-1">
      {/* User Card */}
      <UserCard />
      {accountData.map((item, index) => (
        <NavLink key={index} item={item} />
      ))}
    </nav>
  );
}
