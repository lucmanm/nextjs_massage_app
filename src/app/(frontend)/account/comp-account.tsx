import { Card } from "@/components/ui/card";
import { authMenuData } from "@/constant/data";
import Image from "next/image";

export default function AccountPage() {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    profilePicture: null, // Replace with actual user profile picture URL
  };

  return (
    <section className="p-4 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Content */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Account Page</h1>
          <p className="mt-2 text-gray-600">This is your account page. Manage your profile, settings, and more.</p>
        </div>

        {/* Header Card */}
        <Card className="bg-white rounded-md p-6 flex items-center gap-4 border shadow-sm">
          {user.profilePicture ? (
            <Image
              src={user.profilePicture}
              alt={`${user.name}'s profile`}
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-2xl font-semibold">
              {user.name[0]}
            </div>
          )}

          <div>
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </Card>

        {/* Menu */}

        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {authMenuData.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex flex-col items-center p-4 bg-white border rounded-md shadow-sm hover:bg-gray-100 transition"
            >
              <item.icon className="w-6 h-6 text-gray-700 mb-2" />
              <span className="text-sm font-medium text-gray-800">{item.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
