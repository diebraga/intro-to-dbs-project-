import { getAll } from "@/utils/getAll";
import { updateDeliveryMethod } from "@/utils/updateDeliveryMethod";

const updates = [
  {
    delivery_id: 1,
    new_method: "Standard",
  },
  {
    delivery_id: 2,
    new_method: "Express",
  },
  {
    delivery_id: 3,
    new_method: "Overnight",
  },
];

export default async function AllDeliveryCourier({ searchParams }: any) {
  await updateDeliveryMethod(updates, false);
  const data = await getAll("deliveries");
  const service = {
    delivery_id: 4,
    order_id: 4,
    delivery_date: "2022-02-03",
    delivered_at: null,
    delivery_method: "Overnight",
    created_at: "2021-11-25 23:32:16",
  };
  const { SET_ADDED, SET_ALL_COUL } = searchParams;

  const obj = SET_ADDED === "true" ? service : {};

  return (
    <pre className="text-xs">
      {JSON.stringify(
        [...data, obj].filter((item) => item?.hasOwnProperty("delivery_id")),
        null,
        2
      )}
      <div className="text-xl text-blue-500">
        UPDATE deliveries
        <br />
        SET delivery_method = ?<br />
        WHERE delivery_id = ?<br />
      </div>
    </pre>
  );
}
