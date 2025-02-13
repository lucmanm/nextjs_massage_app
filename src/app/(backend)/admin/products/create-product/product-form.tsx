"use client"; // Required for client-side interactivity

import ButtonCustomized from "@/components/button-customized";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Save } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from "zod";

// Define the form schema using Zod
export const productFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().url("Invalid URL").optional(),
  price: z.string().min(1, "Price is required"),
  duration: z.string().min(1, "Duration is required"),
  salePrice: z.coerce.number().default(0.0),
  isActive: z.boolean().default(true),
});

export default function ProductForm() {
  const { toast: toaster } = useToast();
  // Initialize the form

  const form = useForm<z.infer<typeof productFormSchema>>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      title: "A Visual Journey",
      description:
        "Marvel at the artistry of our spaces that are crafted to provide an exceptional experience, emphasizing the comfort and tranquility awaited within.",
      image: "https://res.cloudinary.com/dzdcszrob/image/upload/v1733872503/icons/qajzdl5t44y0uvtfuhmz.svg",
      price: "500",
      duration: "60 min",
      salePrice: 0.0,
      isActive: true,
    },
  });

  // Handle form submission
  async function onSubmit(values: z.infer<typeof productFormSchema>) {
    try {
      console.log(values);
      toaster({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(values, null, 2)}</code>
          </pre>
        ),
      });
      // const result = await createProduct(values);
      // if (result.status === 200) {
      //   toast.success("Product created successfully!");
      //   form.reset();
      //   router.push("/admin/products");
      // } else {
      //   toast.error(result.body?.error || "Something went wrong.");
      // }
    } catch {
      toast.error("Failed to create user. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <section className="md:flex gap-4 max-sm:space-y-4">
          <Card className="p-4 space-y-4 shadow-sm bg-slate-100 md:w-3/4">
            {/* Title Field */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter product title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description Field */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter product description" {...field} rows={5} className="resize-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Price Field */}
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter price" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Duration Field */}
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration (Minute)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter duration" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Sale Price Field */}
            <FormField
              control={form.control}
              name="salePrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sale Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter sale price" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Is Active Field */}
            <FormField
              control={form.control}
              name="isActive"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Published</FormLabel>
                    <FormDescription>Disable the checkbox if you don&apos;t this to be live.</FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </Card>

          <Card className="p-4 space-y-4 shadow-sm bg-slate-100 md:w-1/4 md:h-96">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Default</FormLabel>
                  <FormControl>
                    <Input type="file" accept=".jpg,.jpeg,.png" onChange={(e) => field.onChange(e.target.files?.[0])} />
                  </FormControl>
                  <FormDescription>This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Card>
        </section>

        {/* Submit Button */}
        <ButtonCustomized icon={Save} title="Create" formState={form.formState.isSubmitting} className="w-fit mt-4" />
      </form>
    </Form>
  );
}
