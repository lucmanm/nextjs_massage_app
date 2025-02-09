import { auth } from "@/auth";
import { notFound, redirect } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ adminSlug: "0552449592" }> }) {
  const adminSlug = (await params).adminSlug;
  const authentication = await auth();

  if (adminSlug === "0552449592") {
    if (authentication?.user) {
      redirect("/admin/dashboard");
    } else {
      redirect("/admin/sign-in");
    }
  } else {
    notFound();
  }
}
