"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import ButtonCustomized from "@/components/button-customized";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createUserSchema } from "@/lib/zod";
import { Lock, Mail, Save, User } from "lucide-react";
import { toast } from "react-toastify";
import { createUserRole } from "./action";

export function CreateUserForm() {
  const form = useForm<z.infer<typeof createUserSchema>>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "SALESPERSON",
    },
  });

  const onSubmit = async (data: z.infer<typeof createUserSchema>) => {
    try {
      const result = await createUserRole(data);

      if (result.status === 200) {
        toast.success("User created successfully!");
        form.reset();
      } else {
        toast.error(result.body?.error || "Something went wrong.");
      }
    } catch {
      toast.error("Failed to create user. Please try again.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-4 max-sm:grid-cols-1 gap-4 mt-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Username</FormLabel>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="size-4 text-gray-500" /> {/* Replace User with your desired icon */}
                </div>
                <FormControl>
                  <Input
                    placeholder="Username"
                    {...field}
                    className="pl-10" // Add padding to the left to make space for the icon
                  />
                </FormControl>
              </div>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Email</FormLabel>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="size-4 text-gray-500" />
                </div>
                <FormControl>
                  <Input
                    placeholder="example@example.com"
                    {...field}
                    className="pl-10" // Add padding to the left to make space for the icon
                  />
                </FormControl>
              </div>
              <FormDescription>Please enter your email address.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Password</FormLabel>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="size-4 text-gray-500" /> {/* Replace Lock with your desired icon */}
                </div>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...field}
                    className="pl-10" // Add padding to the left to make space for the icon
                  />
                </FormControl>
              </div>
              <FormDescription>Password must be at least 6 characters.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger {...field}>
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                  <SelectContent defaultValue={form.getValues("role")} {...field}>
                    <SelectItem value="ADMIN">Admin</SelectItem>
                    <SelectItem value="EDITOR">Editor</SelectItem>
                    <SelectItem value="SALESPERSON">Sales Person</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>Select the user role.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonCustomized
          icon={Save}
          formState={form.formState.isSubmitting}
          title="Create User"
          className="col-span-1"
        />
      </form>
    </Form>
  );
}
