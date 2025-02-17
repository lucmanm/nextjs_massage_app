import { User } from "@prisma/client";
import { CreateUserForm } from "./create-user-form";
import { columns } from "./table/columns";
import { DataTable } from "../products/components/data-table";
import { prisma } from "@/lib/db";

async function getData(): Promise<User[]> {
  const users = await prisma.user.findMany({
    where: {
      OR: [{ role: "ADMIN" }, { role: "SALESPERSON" }, { role: "EDITOR" }],
    },
  });

  return users;
}

const Page = async () => {
  const data = await getData();
  return (
    <div className="container p-4">
      <DataTable columns={columns} data={data} />
      <CreateUserForm />
    </div>
  );
};
export default Page;
