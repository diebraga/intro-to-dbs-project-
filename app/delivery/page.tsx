import { createDeliveries } from "@/utils/createDeliveries";
import { createOrders } from "@/utils/createOrders";
import { createStocks } from "@/utils/createStocks";
import { getAll } from "@/utils/getAll";
import { getUsersSortedBySalary } from "@/utils/getUsersSortedBySalary";
import { setAllOrdersToProcessing } from "@/utils/setAllOrdersStatusToProccessing";
import { setOrdersToShipped } from "@/utils/setPayedToShiped";


export default async function Delivery() {

  await createDeliveries();
  const data = await getAll("deliveries");

  return <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>;
}
