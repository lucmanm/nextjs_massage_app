"use client"; // Required for client-side interactivity

import ButtonCustomized from "@/components/button-customized";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { imagesPlaceHolder } from "@/constant/data";
import { productFormSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Save } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from "zod";
import { createProduct } from "./action";
import { uploadImage } from "@/lib/coudinary-image-upload";

//TODO Applied the multiple image upload in here
//TODO Applied 2 input to set the time
// TEST COMMENT
export default function ProductForm() {
  // Initialize the form

  const form = useForm<z.infer<typeof productFormSchema>>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      title: "",
      description: "",
      image: undefined,
      price: "",
      duration: "",
      salePrice: 0.0,
      isActive: true,
    },
  });

  // Handle form submission
  async function onSubmit(values: z.infer<typeof productFormSchema>) {
    try {
      const uploadResult = await uploadImage(values.image);

      if (uploadResult) {
        const result = await createProduct(
          values,
          uploadResult.secure_url || "",
        );
        if (result.status === 200) {
          toast.success("Product created successfully!");
          form.reset();
          // router.push("/admin/products");
        } else {
          toast.error(result.body?.error || "Something went wrong.");
        }
        form.reset();
      }
    } catch {
      toast.error("Failed to create user. Please try again.");
    }
  }

  // Handle image file change
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        form.setValue("image", file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <section className="gap-4 max-sm:space-y-4 md:flex">
          <Card className="space-y-4 bg-slate-100 p-4 shadow-sm md:grow">
            {/* Title Field */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter product title"
                      {...field}
                      className="shadow-inner"
                    />
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
                    <Textarea
                      placeholder="Enter product description"
                      {...field}
                      rows={5}
                      className="resize-none shadow-inner"
                    />
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
                    <Input
                      type="number"
                      placeholder="Enter price"
                      {...field}
                      className="shadow-inner"
                    />
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
                    <Input
                      placeholder="Enter duration"
                      {...field}
                      className="shadow-inner"
                    />
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
                    <Input
                      type="number"
                      placeholder="Enter sale price"
                      {...field}
                      className="shadow-inner"
                    />
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
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-inner">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Published</FormLabel>
                    <FormDescription>
                      Disable the checkbox if you don&apos;t this to be live.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </Card>

          <Card className="h-96 space-y-4 bg-slate-100 p-4 shadow-sm md:shrink">
            <div className="flex flex-col justify-between">
              <div className="flex size-60 w-full justify-center overflow-hidden rounded-md object-contain">
                <Image
                  src={
                    form.watch("image")
                      ? URL.createObjectURL(form.watch("image"))
                      : imagesPlaceHolder
                  }
                  objectFit="true"
                  alt="Default Image"
                  className="size-60 overflow-hidden rounded-sm object-contain"
                  width={500}
                  height={500}
                />
              </div>

              <FormField
                control={form.control}
                name="image"
                render={() => (
                  <FormItem className="grow-0">
                    <FormLabel>Default</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        onChange={handleImageChange}
                        className="bg-gray-100 shadow-inner"
                      />
                    </FormControl>
                    <FormDescription className="text-center">
                      This is your default image.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Card>
        </section>

        {/* Submit Button */}
        <ButtonCustomized
          icon={Save}
          title="Create"
          formState={form.formState.isSubmitting}
          className="mt-4 w-fit"
        />
      </form>
    </Form>
  );
}
