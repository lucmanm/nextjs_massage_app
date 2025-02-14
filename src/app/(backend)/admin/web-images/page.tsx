import { Card } from "@/components/ui/card";
import { WebImageForm } from "./web-image-form";


async function Page() {
// TODO Create a upload slider for frontend
  return (
    <div className="p-4 flex-1">
      <Card className="flex-1 grow">
        <h2 className="text-xl font-bold flex items-center py-2 pl-2">Web Images</h2>
      </Card>
      <WebImageForm />
   </div>
  );
}

export default Page;
