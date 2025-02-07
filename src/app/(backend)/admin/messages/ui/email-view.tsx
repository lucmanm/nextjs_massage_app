import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export function EmailView() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex gap-2">
          {/* <Button variant="ghost" size="icon">
            <Archive className="h-4 w-4" />
          </Button> */}
          <Button variant="ghost" size="icon">
            <Trash className="h-4 w-4" />
          </Button>
          {/* <Button variant="ghost" size="icon">
            <Clock className="h-4 w-4" />
          </Button> */}
        </div>
        {/* <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div> */}
      </div>
      <div className="p-6 flex-1">
        <div className="flex items-start gap-4 mb-6">
          <Avatar>
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-semibold text-lg">Alice Smith</h2>
                {/* <p className="text-sm text-muted-foreground">Re: Project Update</p> */}
                <p className="text-sm text-muted-foreground">From: alicesmith@example.com</p>
              </div>
              <span className="text-sm text-muted-foreground">Oct 22, 2023, 10:30:00 AM</span>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Thank you for the project update. It looks great! Ive gone through the report, and the progress is
                impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.
              </p>
              <p>I have a few minor suggestions that Ill include in the attached document.</p>
              <p>Lets discuss these during our next meeting. Keep up the excellent work!</p>
              <p>
                Best regards,
                <br />
                Alice
              </p>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center gap-4 mt-8">
          <Avatar>
            <AvatarFallback>YO</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea placeholder="Reply Alice Smith..." className="min-h-[100px] resize-none" />
            <div className="flex flex-row-reverse justify-between mt-2">
              <Button variant="ghost" size="sm">
                <RotateCcw className="h-4 w-4 mr-2" />
                Mute this thread
              </Button>
              <ButtonCustomized formState={false} icon={Send} title="Reply" className="w-32" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
