import { LoaderPinwheel, Save } from "lucide-react";
import { Button } from "./ui/button";

export default function ButtonCustomized({ formState, title }: { title: string; formState: boolean }) {
  return (
    <Button type="submit" disabled={formState}>
      {formState ? (
        <>
          <LoaderPinwheel className="animate-spin" /> Loading...
        </>
      ) : (
        <>
          <Save /> {title}
        </>
      )}
    </Button>
  );
}
