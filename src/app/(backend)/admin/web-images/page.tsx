import { Card } from "@/components/ui/card";
import { WebImageForm } from "./web-image-form";

// interface CloudinaryResource {
//   context?: {
//     alt?: string;
//     caption?: string;
//   };
//   public_id: string;
//   secure_url: string;
// }
// const images = [
//   {
//     name: "Nike",
//     link: "https://unsplash.com/photos/164_6wVEHfI",
//   },
//   {
//     name: "Converse",
//     link: "https://unsplash.com/photos/0BKZfcamvGg",
//   },
//   {
//     name: "Vans",
//     link: "https://unsplash.com/photos/a-QH9MAAVNI",
//   },
//   {
//     name: "New Balance",
//     link: "https://unsplash.com/photos/tgdgb6yb0Qo",
//   },
//   {
//     name: "Adidas",
//     link: "https://unsplash.com/photos/JM-qKEd1GMI",
//   },
//   {
//     name: "Puma",
//     link: "https://unsplash.com/photos/NUoPWImmjCU",
//   },
// ];
async function Page() {
  // const { resources: sneakers } = await cloudinary.api.resources_by_tag("nextjs-server-actions-upload-sneakers", {
  //   context: true,
  // });
  // async function create(formData: FormData) {
  //   "use server";
  //   const file = formData.get("image") as File;
  //   const arrayBuffer = await file.arrayBuffer();
  //   const buffer = Buffer.from(arrayBuffer);

  //   await new Promise((resolve, reject) => {
  //     cloudinary.uploader
  //       .upload_stream(
  //         {
  //           tags: ["nextjs-server-actions-upload-sneakers"],
  //           upload_preset: "nextjs-server-actions-upload",
  //         },
  //         function (error, result) {
  //           if (error) {
  //             reject(error);
  //             return;
  //           }
  //           resolve(result);
  //         }
  //       )
  //       .end(buffer);
  //   });

  //   revalidatePath("/");
  // }

  return (
    <div className="p-4 flex-1 h-full">
      <Card>
        <h2 className="text-xl font-bold mb-4">Add a New Image</h2>
        <WebImageForm />
        {/* <form action={create} className="bg-white border border-slate-200 dark:border-slate-500 rounded p-6 mb-6">
          <p className="mb-6">
            <label htmlFor="image" className="block font-semibold text-sm mb-2">
              Select an Image to Upload
            </label>

            <Input
              type="file"
              id="image"
              className="block w-full border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              name="image"
              required
            />
          </p>
          <Button>Submit</Button>
        </form> */}
        {/* <h2 className="text-xl font-bold mb-4">Images</h2>
        <ul className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {sneakers.map((sneaker: CloudinaryResource) => {
            return (
              <li key={sneaker.public_id} className="rounded overflow-hidden bg-white dark:bg-slate-700">
                <div className="relative">
                  <NextCldImage width={800} height={600} src={sneaker.public_id} alt={sneaker.context?.alt || ""} />
                </div>
                {sneaker.context?.caption && (
                  <div className="py-4 px-5">
                    <p className="mb-1 text-md font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                      {sneaker.context?.caption || ""}
                    </p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        <h2 className="text-xl font-bold mb-4">Links</h2>
        <ul>
          {images.map((image) => {
            return (
              <li key={image.name}>
                {image.name}:{" "}
                <a className="text-blue-600" href={image.link}>
                  {image.link}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 py-10 border-[0] border-t border-solid border-slate-300">
          <p>
            Find more Cloudinary examples at:{" "}
            <a className="underline text-inherit" href="https://github.com/cloudinary-community/cloudinary-examples">
              github.com/cloudinary-community/cloudinary-examples
            </a>
            .
          </p>
        </div> */}
      </Card>
    </div>
  );
}

export default Page;
