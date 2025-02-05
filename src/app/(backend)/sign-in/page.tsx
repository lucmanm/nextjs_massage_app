import { GalleryVerticalEnd } from "lucide-react";

import { AdminSignInForm } from "@/app/(backend)/sign-in/login-form";
import { auth } from "@/auth";
import { imagesPlaceHolder } from "@/constant/data";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();
  if (session) redirect("/admin/dashboard");

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Touch Massage
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <AdminSignInForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image fill src={imagesPlaceHolder} alt="image default" />
      </div>
    </div>
  );
}
