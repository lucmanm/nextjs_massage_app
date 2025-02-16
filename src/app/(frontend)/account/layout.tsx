import { accountData } from "@/constant/data";
import { SideNav } from "./comp-side-menu";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto lg:flex py-4 gap-4">
      <div className="hidden md:block md:w-1/4 ">
        <SideNav isCollapsed={false} links={accountData} />
      </div>
      <div className="border lg:flex-1 rounded-md">{children}</div>
    </section>
  );
}
