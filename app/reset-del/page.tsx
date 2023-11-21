import { createDeliveries } from "@/utils/createDeliveries";
import { createOrders } from "@/utils/createOrders";
import { createStocks } from "@/utils/createStocks";
import { getAll } from "@/utils/getAll";
import { getUsersSortedBySalary } from "@/utils/getUsersSortedBySalary";
import { setAllOrdersToProcessing } from "@/utils/setAllOrdersStatusToProccessing";
import { setOrdersToShipped } from "@/utils/setPayedToShiped";
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

export default async function AllDeliveryCourier() {
  await updateDeliveryMethod(updates, false);
  const data = await getAll("deliveries");

  return (
    <pre className="text-xs">
      {JSON.stringify(data, null, 2)}
      <div className="text-xl text-blue-500">
        UPDATE deliveries
        <br />
        SET delivery_method = ?<br />
        WHERE delivery_id = ?<br />
      </div>
    </pre>
  );
}
