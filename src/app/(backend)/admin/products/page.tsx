import { columns } from "../_components/table/columns";
import { DataTable } from "../_components/table/data-table";
import { getProducts } from "./product.action";

export default async function Page() {
  const data = await getProducts();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
