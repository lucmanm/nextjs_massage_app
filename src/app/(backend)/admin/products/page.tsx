import { columns, ProductWithoutTimestamps } from "../_components/table/columns";
import { DataTable } from "../_components/table/data-table";

async function getData(): Promise<ProductWithoutTimestamps[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      title: "Product 1",
      description: "Description of product 1",
      price: 1000,
      salePrice: 800,
    },
    {
      id: "f2b8c2d0",
      title: "Product 2",
      description: "Description of product 2",
      price: 2000,
      salePrice: 1800,
    },
    {
      id: "f2b8c2d1",
      title: "Product 3",
      description: "Description of product 3",
      price: 3000,
      salePrice: 2800,
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
