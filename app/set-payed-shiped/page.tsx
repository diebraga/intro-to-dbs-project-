import { createOrders } from "@/utils/createOrders";
import { getAll } from "@/utils/getAll";
import { setAllOrdersToProcessing } from "@/utils/setAllOrdersStatusToProccessing";
import { setOrdersToShipped } from "@/utils/setPayedToShiped";


export default async function Orders() {

  const data = await getAll("orders");

  return <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>;
}
