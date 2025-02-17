import UserCard from "@/components/user-card";
import NavLink from "./nav-link";
import { NavProps } from "@/constant/data";

export function AccountSidebar({ items }: { items: NavProps[] }) {
  return (
    <nav className="grid gap-1 rounded-md border p-1">
      {/* User Card */}
      <UserCard />
      {items.map((item, index) => (
        <NavLink key={index} item={item} />
      ))}
    </nav>
  );
}
