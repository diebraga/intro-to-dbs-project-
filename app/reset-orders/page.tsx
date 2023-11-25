import { RenderComponent } from "@/components/RenderComponent/RenderComponent";
import { createOrders } from "@/utils/createOrders";
import { getAll } from "@/utils/getAll";

export default async function Orders() {
  // await deleteAllUsers()
  await createOrders();
  const data = await getAll("orders");

  return (
    <pre className="text-xs">
      <RenderComponent
        data={data}
        query="DEL_6_MONTHS"
        k="created_at"
        field="2013-04-25T00:32:08.753Z"
        count={false}
      />
      <div className="text-xl text-blue-500">
        {'"INSERT INTO orders'} <br />
        (order_id, customer_id, user_id, status, total, created_at) <br />
        {"VALUES (1, 1, 1, 'Processing', 100.00, '2023-01-01');"}
        {`"`}
      </div>
    </pre>
  );
}
