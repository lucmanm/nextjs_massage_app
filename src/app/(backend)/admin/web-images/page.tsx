import { Card } from "@/components/ui/card";
import cloudinary from "@/config/cloudinary";
import UploadSliderImages from "./upload-sliders";
import { WebImageForm } from "./web-image-form";

async function Page() {

  const { resources: slidersData } = await cloudinary.api.resources_by_tag(
    "slider-image",
    { context: true },
  );

  return (
    <div className="flex-1 p-4">
      <Card className="flex-1 grow">
        <h2 className="flex items-center py-2 pl-2 text-xl font-bold">
          Web Images
        </h2>
      </Card>
      <WebImageForm />
      <UploadSliderImages items={slidersData} />
    </div>
  );
}

export default Page;
