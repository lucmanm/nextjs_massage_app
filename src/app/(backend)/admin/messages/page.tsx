import { EmailList } from "./ui/email-list";
import { EmailView } from "./ui/email-view";

export default function InboxPage() {
  return (
    <div className="flex h-screen bg-background">
      <div className="w-[400px]">
        <EmailList />
      </div>
      <div className="flex-1">
        <EmailView />
      </div>
    </div>
  );
}
