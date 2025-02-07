import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"

interface Email {
  id: string
  subject: string
  preview: string
  sender: string
  timestamp: string
  read: boolean
}

const emails: Email[] = [
  {
    id: "1",
    subject: "Meeting Tomorrow",
    preview:
      "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we...",
    sender: "William Smith",
    timestamp: "over 1 year ago",
    read: true,
  },
  {
    id: "2",
    subject: "Re: Project Update",
    preview:
      "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I...",
    sender: "Alice Smith",
    timestamp: "over 1 year ago",
    read: false,
  },
  {
    id: "3",
    subject: "Weekend Plans",
    preview:
      "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun. If you're...",
    sender: "Bob Johnson",
    timestamp: "almost 2 years ago",
    read: true,
  },
]

export function EmailList() {
  return (
    <div className="flex flex-col h-full border-r">
      <div className="p-4 border-b">
        <h1 className="text-xl font-semibold mb-4">Inbox</h1>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 text-sm bg-background hover:bg-accent rounded-full">All mail</button>
          <button className="px-3 py-1 text-sm hover:bg-accent rounded-full">Unread</button>
        </div>
      </div>
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search" className="pl-9" />
        </div>
      </div>
      <div className="overflow-auto flex-1">
        {emails.map((email) => (
          <div
            key={email.id}
            className={cn("p-4 border-b cursor-pointer hover:bg-accent/50", !email.read && "bg-accent/20")}
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-semibold">{email.sender}</h3>
              <span className="text-xs text-muted-foreground">{email.timestamp}</span>
            </div>
            <h4 className="font-medium mb-1">{email.subject}</h4>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{email.preview}</p>

          </div>
        ))}
      </div>
    </div>
  )
}

