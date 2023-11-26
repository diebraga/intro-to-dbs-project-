import { getAll } from "@/utils/getAll";
import { updateDeliveryMethod } from "@/utils/updateDeliveryMethod";

const updates = [
  { delivery_id: 1, new_method: "Courier" },
  { delivery_id: 2, new_method: "Drone" },
];

export default async function AllDeliveryCourier({
  searchParams,
  params,
}: any) {
  await updateDeliveryMethod(updates, true);

  const data = await getAll("deliveries");
  const { SET_ADDED } = searchParams;
  const service = {
    delivery_id: 4,
    order_id: 4,
    delivery_date: "2022-02-03",
    delivered_at: null,
    delivery_method: "Courier",
    created_at: "2021-11-25 23:32:16",
  };
  const obj = SET_ADDED === "true" ? service : "";

  return (
    <pre className="text-xs">
      {JSON.stringify([...data, obj], null, 2)}
      <div className="text-xl text-blue-500">
        {"UPDATE deliveries SET delivery_method = 'Courier'"}
      </div>
    </pre>
  );
}
