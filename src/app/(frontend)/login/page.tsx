import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "@/app/(frontend)/login/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="flex-1 flex items-center justify-center">
      <div className="items-center flex flex-col gap-y-4">
        <Link href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Touch Massage.
        </Link>
        <LoginForm />
      </div>
    </section>
  );
}
