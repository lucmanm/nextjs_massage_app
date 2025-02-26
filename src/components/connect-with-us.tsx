"use client";

import { contactUsSendMessage } from "@/actions/formActions";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAlertStore } from "@/hooks/useAlertStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import AlertMessage from "./alert-dialog";
import ButtonCustomized from "./button-customized";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { cn } from "@/lib/utils";

// Define the form schema using Zod
export const contactFormSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name"),
  lastName: z.string().min(1, "Please enter your last name"),
  email: z.string().min(1, "Please enter your email"),
  phoneNumber: z.string().min(1, "Please enter your phone number"),
  message: z.string().min(1, "Please enter your message"),
  subject: z.string().min(1, "Please enter your Subject"),
});

export default function ConnectWithUs({ className }: { className?: string }) {
  const { setAlert } = useAlertStore();

  // Initialize the form
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      subject: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    try {
      const response = await contactUsSendMessage(values);

      if (response?.status === 201) {
        setAlert("Successfull", "Thank you for your message, we will get back to you soon.", "success");
        form.reset();
      } else if (response?.status === 429) {
        setAlert("Too many requests", "Please try again later, thank you.", "warning");
        form.reset();
      } else {
        toast.error("Something went wrong.");
      }
    } catch {
      toast.error("Failed to send message");
    }
  }

  return (
    <Card className={cn("mx-auto border border-blue-700 p-4", className)}>
      <div className="grid md:grid-cols-[400px_1fr]">
        {/* Left Sidebar */}
        <div className="bg-blue-700 text-white p-8 rounded-lg space-y-8">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-wide">CONNECT WITH US</h2>
            <h1 className="text-3xl font-bold">Your Wellness Journey Awaits</h1>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-full">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Our Location</h3>
                <p className="text-sm text-white/90">Jeddah Saudi Arabia</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-full">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-sm text-white/90">info@touchmassage.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-full">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-sm text-white/90">(000) 000-0000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-4  md:pl-4 max-sm:pt-4">
            {/* First Name Field */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Last Name Field */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Your Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Field */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="Your Phone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Subject Field */}
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="Subject" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Message Field */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Your Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Your Message" className="min-h-[150px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <ButtonCustomized title="Send" icon={Send} formState={form.formState.isSubmitting} className="col-span-2" />
          </form>
        </Form>
      </div>
      <AlertMessage />
    </Card>
  );
}
