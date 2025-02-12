import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { notFound, redirect } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ adminSlug: string }> }) {

  const adminSlug = (await params).adminSlug;
  const checkCode = await prisma.storeCode.findFirst({ where: { code: adminSlug } });

  if (checkCode?.code !== adminSlug) {
    redirect("/");
  }

  if (checkCode) {
    const authentication = await auth();
    if (authentication?.user) {
      redirect("/admin/dashboard");
    } else {
      redirect("/admin/sign-in");
    }
  } else {
    notFound();
  }
}
