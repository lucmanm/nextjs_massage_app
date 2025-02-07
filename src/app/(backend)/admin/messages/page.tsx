import { prisma } from "@/lib/db";
import { EmailList } from "./ui/email-list";
import { EmailView } from "./ui/email-view";

export default async function MessagesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const data = await prisma.conactUs.findMany();

  const selectedEmailId = searchParams.emailId as string | undefined;

  const selectedEmail = selectedEmailId
    ? data.find((email) => email.id === selectedEmailId)
    : null;

  return (
    <div className="flex h-screen bg-background">
      <div className="w-[400px]">
        <EmailList data={data} selectedEmailId={selectedEmailId} />
      </div>
      <div className="flex-1">
        <EmailView email={selectedEmail} />
      </div>
    </div>
  );
}