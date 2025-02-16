import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";

export default function UserCard() {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    profilePicture: null, // Replace with actual user profile picture URL
  };

  return (
    <Card className="flex items-center gap-4 rounded-md border bg-white p-6 shadow-sm">
      {user.profilePicture ? (
        <Image
          src={user.profilePicture}
          alt={`${user.name}'s profile`}
          width={64}
          height={64}
          className="h-16 w-16 rounded-full object-cover"
        />
      ) : (
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-2xl font-semibold text-gray-500">
          {user.name[0]}
        </div>
      )}

      <div>
        <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>
    </Card>
  );
}
