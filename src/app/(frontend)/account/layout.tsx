import { accountData } from "@/constant/data";
import { AccountSidebar } from "./account-sidebar";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto gap-4 py-4 lg:flex">
      <div className="hidden md:block md:w-1/4">
        <AccountSidebar items={accountData} />
      </div>
      <div className="rounded-md border lg:flex-1">{children}</div>
    </section>
  );
}
