import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { ConactUs } from "@prisma/client";

export function EmailView({ email }: { email?: ConactUs | null }) {
  if (!email) {
    return (
      <div className="flex flex-col h-full">
        <div className="p-6 flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Select an email to view</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="p-6 flex-1">
        <div className="flex items-start gap-4 mb-6">
          <Avatar>
            <AvatarFallback>
              {email.firstName[0]}
              {email.lastName[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-semibold text-lg">{`${email.firstName} ${email.lastName}`}</h2>
                <p className="text-sm text-muted-foreground">From: {email.email}</p>
              </div>
              <span className="text-sm text-muted-foreground">{email.createdAt.toLocaleDateString()}</span>
            </div>
            <div className="mt-4 space-y-4">
              <p>{email.message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
