import { getAll } from "@/utils/getAll";

export default async function Delivery({ searchParams }: any) {
  const data = await getAll("deliveries");
  const { SET_ADDED, SET_ALL_COUL } = searchParams;
  const delivery_method = SET_ALL_COUL === "true" ? "Courier" : "Overnight";
  const service = {
    delivery_id: 4,
    order_id: 4,
    delivery_date: "2022-02-03",
    delivered_at: null,
    delivery_method,
    created_at: "2021-11-25 23:32:16",
  };
  const obj = SET_ADDED === "true" ? service : "";

  return (
    <pre className="text-xs">
      {JSON.stringify([...data, obj], null, 2)}
      <div className="text-xl text-blue-500">SELECT * FROM deliveries</div>
    </pre>
  );
}
