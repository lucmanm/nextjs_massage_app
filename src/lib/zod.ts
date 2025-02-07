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