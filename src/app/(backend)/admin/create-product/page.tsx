import React from "react";
import ProductForm from "./product-form";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

const Page = async () => {
  const session = await auth();
  if (!session) redirect("/sign-in");
  return (
    <div className="lg:max-w-lg">
      <ProductForm />
    </div>
  );
};

export default Page;
