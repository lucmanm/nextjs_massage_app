import { auth } from "@/auth";
import { imagesPlaceHolder } from "@/constant/data";
import Image from "next/image";
import { redirect } from "next/navigation";
import { AdminSignInForm } from "./login-form";

export default async function LoginPage() {
  const session = await auth();
  if (session) redirect("/admin/dashboard");

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex items-center justify-center flex-col gap-4 p-6 md:p-10">
        <AdminSignInForm className="md:w-1/2" />
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image fill src={imagesPlaceHolder} alt="image default" />
      </div>
    </div>
  );
}
