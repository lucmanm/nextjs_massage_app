import { cn } from "@/lib/utils";
import { LoaderPinwheel, LucideIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function ButtonCustomized({
  className,
  formState,
  title,
  icon: Icon, // Rename `icon` to `Icon` to follow JSX component naming conventions
}: {
  className?: string;
  title: string;
  formState: boolean;
  icon: LucideIcon;
}) {
  return (
    <Button type="submit" disabled={formState} className={cn("w-full", className)}>
      {formState ? (
        <>
          <LoaderPinwheel className="animate-spin" /> Loading...
        </>
      ) : (
        <>
          {Icon && <Icon className="mr-2 h-4 w-4" />} {title}
        </>
      )}
    </Button>
  );
}
