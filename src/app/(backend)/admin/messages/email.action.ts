"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function markEmailAsRead(emailId: string) {
  await prisma.conactUs.update({
    where: { id: emailId },
    data: { isRead: true },
  });

  revalidatePath("/admin/messages"); // Revalidate the messages page
}