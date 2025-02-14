import { Role } from "@prisma/client";
import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  role: z.enum([Role.ADMIN, Role.EDITOR, Role.SALESPERSON], {
    required_error: "Role is required.",
    invalid_type_error: "Invalid role type.",
  }),
});

export const loginSchema = z.object({
  // name: z.string().min(2, {
  //   message: "Username must be at least 2 characters.",
  // }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

// Define the form schema using Zod
export const productFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  price: z.string().min(1, "Price is required"),
  duration: z.string().min(1, "Duration is required"),
  salePrice: z.coerce.number().default(0.0),
  isActive: z.boolean().default(true),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: "Image is required" })
    .refine((file) => file.type.startsWith("image/"), {
      message: "Only image files are allowed",
    }),
});
