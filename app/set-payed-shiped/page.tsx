import { RenderComponent } from "@/components/RenderComponent/RenderComponent";
import { createOrders } from "@/utils/createOrders";
import { getAll } from "@/utils/getAll";
import { setOrdersToShipped } from "@/utils/setPayedToShiped";

export default async function Orders() {
  await setOrdersToShipped([1, 2]);
  const data = await getAll("orders");

  return (
    <pre className="text-xs">
      <RenderComponent
        data={data}
        query="DEL_6_MONTHS"
        k="created_at"
        field="2013-04-25T00:32:08.753Z"
        count={false}
      />{" "}
      <div>
        Imagine our backend has a webhook that watches the <br />
        payments and returns order one and two have been payed
      </div>
      <div className="text-xl text-blue-500">
        {"UPDATE orders SET status = 'Shipped' WHERE order_id IN (1, 2)"}
      </div>
    </pre>
  );
}
