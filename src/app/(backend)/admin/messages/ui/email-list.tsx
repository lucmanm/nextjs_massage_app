"use client";

import { cn } from "@/lib/utils";
import { ConactUs } from "@prisma/client";
import Link from "next/link";
import { markEmailAsRead } from "../email.action";
import { useRouter } from "next/navigation";

export function EmailList({ data, selectedEmailId }: { data: ConactUs[]; selectedEmailId?: string }) {
  const router = useRouter();
  const handleEmailClick = async (emailId: string) => {
    await markEmailAsRead(emailId);
    router.refresh();
  };

  return (
    <div className="flex flex-col h-full border-r">
      {/* <div className="p-4 border-b">
        <h1 className="text-xl font-semibold mb-4">Inbox</h1>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 text-sm bg-background hover:bg-accent rounded-full">All mail</button>
          <button className="px-3 py-1 text-sm hover:bg-accent rounded-full">Unread</button>
        </div>
      </div> */}
      <div className="overflow-auto flex-1">
        {data.map((email) => (
          <Link
            key={email.id}
            href={`?emailId=${email.id}`}
            onClick={() => handleEmailClick(email.id)}
            className={cn(
              "p-4 border-b cursor-pointer hover:bg-accent/50 block",
              email.id === selectedEmailId && "bg-accent/20"
            )}
          >
            <div className="flex justify-between items-start mb-1">
              <h3
                className={`${email.isRead ? "font-normal" : "font-semibold"}`}
              >{`${email.lastName} ${email.firstName}`}</h3>
              <span className="text-xs text-muted-foreground">{email.createdAt.toLocaleDateString()}</span>
            </div>
            <h4 className="font-medium mb-1">{email.subject}</h4>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{email.message}</p>
            {/* {isPending && <span className="text-sm text-muted-foreground">Marking as read...</span>} */}
          </Link>
        ))}
      </div>
    </div>
  );
}
