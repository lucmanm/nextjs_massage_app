import { Card } from "@/components/ui/card";
import { WebImageForm } from "./web-image-form";
import UploadSliderImages from "./upload-sliders";


async function Page() {
// TODO Create a upload slider for frontend
  return (
    <div className="p-4 flex-1">
      <Card className="flex-1 grow">
        <h2 className="text-xl font-bold flex items-center py-2 pl-2">Web Images</h2>
      </Card>
      <WebImageForm />
      <UploadSliderImages/>
   </div>
  );
}

export default Page;
