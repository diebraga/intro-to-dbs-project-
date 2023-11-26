import { RenderComponent } from "@/components/RenderComponent/RenderComponent";

export default async function Days({ searchParams }: any) {
  const data = [
    {
      product_id: 1,
      description: "Basic Lawnmower",
      price: 299.99,
      quantity_in_stock: 40,
      last_ordered_date: "2023-01-01",
      category: "Lawnmowers",
      manufacturer: "GreenCuts",
      created_at: "2023-11-26 13:33:29",
      updated_at: null,
    },
    {
      product_id: 2,
      description: "Self-Propelled Lawnmower",
      price: 559.5,
      quantity_in_stock: 30,
      last_ordered_date: "2023-01-15",
      category: "Lawnmowers",
      manufacturer: "LawnMaster",
      created_at: "2023-11-26 13:33:29",
      updated_at: null,
    },
    {
      product_id: 3,
      description: "Electric Lawnmower",
      price: 425,
      quantity_in_stock: 50,
      last_ordered_date: "2023-01-10",
      category: "Lawnmowers",
      manufacturer: "EcoMow",
      created_at: "2023-11-26 13:33:29",
      updated_at: null,
    },
  ];
  const { SET_ADDED } = searchParams;

  const product = {
    product_id: 4,
    description: "Gas Lawnmower",
    price: 500,
    quantity_in_stock: 50,
    last_ordered_date: "2022-01-10",
    category: "Lawnmowers",
    manufacturer: "GasFacture",
    created_at: "2023-11-25 19:07:02",
    updated_at: null,
  };

  const obj = SET_ADDED === "true" ? product : "";
  return (
    <pre className="text-xs">
      <RenderComponent
        data={[...data, obj]}
        query="DEL_ALL_FROM_MAN"
        k="manufacturer"
        field="LawnMaster"
      />
      <div className="text-xl text-blue-500">
        {`UPDATE product SET category = "on-Special" WHERE category = "Lawnmowers"`}
      </div>
    </pre>
  );
}
