"use client";

import ButtonCustomized from "@/components/button-customized";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const storeInformationSchema = z.object({
  storeName: z.string().min(2, {
    message: "Store Name must be at least 2 characters.",
  }),
  about: z.string().min(2, {
    message: "About must be at least 2 characters.",
  }),
  address: z.string().min(2, {
    message: "Address must be at least 2 characters.",
  }),
  copyRightPhrase: z.string().min(2, {
    message: "Copy Right Phrase must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  commercialRegistryNumber: z.string().min(2, {
    message: "Commercial Registry Number must be at least 2 characters.",
  }),
  taxNumber: z.string().min(2, {
    message: "Tax Number must be at least 2 characters.",
  }),
  eCommerceAuthCertNumber: z
    .string()
    .min(2, {
      message: "E-Commerce Auth Cert Number must be at least 2 characters.",
    })
    .optional(),
});

export function StoreInformationForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof storeInformationSchema>>({
    resolver: zodResolver(storeInformationSchema),
    defaultValues: {
      storeName: "",
      about: "",
      address: "",
      copyRightPhrase: "",
      email: "",
      commercialRegistryNumber: "",
      taxNumber: "",
      eCommerceAuthCertNumber: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof storeInformationSchema>) => {
    console.log(data);
    router.refresh();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start"
      >
        <FormField
          control={form.control}
          name="storeName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Store Name</FormLabel>
              <FormControl>
                <Input placeholder="Store Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="about"
          render={({ field }) => (
            <FormItem>
              <FormLabel>About</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us about the company" className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="copyRightPhrase"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Copy Right Phrase</FormLabel>
              <FormControl>
                <Input placeholder="Copy Right Phrase" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="commercialRegistryNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Commercial Registry Number</FormLabel>
              <FormControl>
                <Input placeholder="Commercial Registry Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="taxNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tax Number</FormLabel>
              <FormControl>
                <Input placeholder="Tax Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eCommerceAuthCertNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-Commerce Auth Cert Number</FormLabel>
              <FormControl>
                <Input placeholder="E-Commerce Auth Cert Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonCustomized
          title="Save"
          className="font-medium w-1/3 md:col-span-2 lg:col-span-3 "
          formState={form.formState.isSubmitting}
          icon={Save}
        />
      </form>
    </Form>
  );
}
