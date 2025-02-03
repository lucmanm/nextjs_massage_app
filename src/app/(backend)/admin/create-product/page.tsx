import ProductForm from "./product-form";

const Page = async () => {
  // const session = await auth();
  // if (!session) redirect("/sign-in");
  return (
    <div className="lg:max-w-lg">
      <ProductForm />
    </div>
  );
};

export default Page;
