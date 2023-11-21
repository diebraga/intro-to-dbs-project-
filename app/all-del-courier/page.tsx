import { createDeliveries } from "@/utils/createDeliveries";
import { createOrders } from "@/utils/createOrders";
import { createStocks } from "@/utils/createStocks";
import { getAll } from "@/utils/getAll";
import { getUsersSortedBySalary } from "@/utils/getUsersSortedBySalary";
import { setAllOrdersToProcessing } from "@/utils/setAllOrdersStatusToProccessing";
import { setOrdersToShipped } from "@/utils/setPayedToShiped";
import { updateDeliveryMethod } from "@/utils/updateDeliveryMethod";

const updates = [
  { delivery_id: 1, new_method: "Courier" },
  { delivery_id: 2, new_method: "Drone" },
];

export default async function AllDeliveryCourier() {
  await updateDeliveryMethod(updates, true);
  const data = await getAll("deliveries");

  return (
    <pre className="text-xs">
      {JSON.stringify(data, null, 2)}
      <div className="text-xl text-blue-500">
        {"UPDATE deliveries SET delivery_method = 'Courier'"}
      </div>
    </pre>
  );
}
