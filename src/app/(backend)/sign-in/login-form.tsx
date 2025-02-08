"use client";

import ButtonCustomized from "@/components/button-customized";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { loginSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, LogIn, User } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function AdminSignInForm({ ...props }: React.ComponentPropsWithoutRef<"div">) {
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.error) {
      alert(result.error);
    } else {
      router.push("/admin/dashboard"); // Redirect to dashboard or any other page
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", props.className)} {...props}>
      {/* <Card> */}
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Admin</CardTitle>
        <CardDescription>Please enter your auth Account</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-6">
{/*
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <AppleIcon />
                  Login with Apple
                </Button>
                <Button variant="outline" className="w-full bg-blue-600 text-white">
                  <GoogleIcon />
                  Login with Google
                </Button>
              </div>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">Or continue with</span>
              </div> */}

              <div className="grid gap-6">
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
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
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center">
                          <FormLabel>Password</FormLabel>
                          {/* <Link href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                            Forgot your password?
                          </Link> */}
                        </div>
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
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <ButtonCustomized title="Login" formState={form.formState.isSubmitting} icon={LogIn} />
              </div>
              {/* <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                  Sign up
                </a>
              </div> */}
            </div>
          </form>
        </Form>
      </CardContent>
      {/* </Card> */}
      {/* <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  /">
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </div> */}
    </div>
  );
}
