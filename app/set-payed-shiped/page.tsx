import { createOrders } from "@/utils/createOrders";
import { getAll } from "@/utils/getAll";
import { setAllOrdersToProcessing } from "@/utils/setAllOrdersStatusToProccessing";
import { setOrdersToShipped } from "@/utils/setPayedToShiped";


export default async function Orders() {
await setOrdersToShipped([1,2])
  const data = await getAll("orders");

  return <pre className="text-xs">{JSON.stringify(data, null, 2)}
  <div>Imagine our backend has a webhook that watches the <br/>payments and returns order one and two have been payed</div>
  <div className="text-xl text-blue-500">UPDATE orders SET status = 'Shipped' WHERE order_id IN (1, 2)</div>
  </pre>;
}
