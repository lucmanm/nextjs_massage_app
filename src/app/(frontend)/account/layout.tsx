import { accountData } from "@/constant/data";
import { SideMenu } from "./comp-side-menu";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto gap-4 py-4 lg:flex">
      <div className="hidden md:block md:w-1/4">
        <SideMenu items={accountData} />
      </div>
      <div className="rounded-md border lg:flex-1">{children}</div>
    </section>
  );
}
