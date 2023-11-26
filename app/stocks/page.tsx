import { RenderComponent } from "@/components/RenderComponent/RenderComponent";
import { getAll } from "@/utils/getAll";

export default async function Stocks({ searchParams }: any) {
  const data = await getAll("product");
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

  const { SET_ADDED } = searchParams;

  const obj = SET_ADDED === "true" ? product : "";
  return (
    <pre className="text-xs">
      <RenderComponent
        data={[...data, obj]}
        query="DEL_ALL_FROM_MAN"
        k="manufacturer"
        field="LawnMaster"
      />

      <div className="text-xl text-blue-500">SELECT * FROM product</div>
    </pre>
  );
}
