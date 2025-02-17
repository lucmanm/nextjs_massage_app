import UserCard from "@/components/user-card";
import { accountData } from "@/constant/data";
import { cn } from "@/lib/utils";

export default function MobileNavigation({
  className,
}: {
  className?: string;
}) {
  return (
    <section className={cn(`min-h-screen bg-gray-50 p-4`, className)}>
      <div className="mx-auto max-w-4xl">
        {/* Content */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Account Page</h1>
          <p className="mt-2 text-gray-600">
            This is your account page. Manage your profile, settings, and more.
          </p>
        </div>

        {/* Header Card */}
        <UserCard />

        {/* Menu */}

        <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {accountData.map((item) => (
            <a
              key={item.title}
              href={`/account/${item.title}`}
              className="flex flex-col items-center rounded-md border bg-white p-4 shadow-sm transition hover:bg-gray-100"
            >
              <item.icon className="mb-2 h-6 w-6 text-gray-700" />
              <span className="text-sm font-medium text-gray-800">
                {item.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
