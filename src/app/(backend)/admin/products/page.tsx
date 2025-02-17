import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { getProducts } from "./product.action";

export default async function Page() {
  const data = await getProducts();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
