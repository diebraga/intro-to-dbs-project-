import { createOrders } from "@/utils/createOrders";
import { getAll } from "@/utils/getAll";


export default async function Orders() {
  // await deleteAllUsers()
  await createOrders()
  const data = await getAll("orders");

  return <pre className="text-xs">{JSON.stringify(data, null, 2)}
        <div>Create if doesn't exist</div>

    <div className="text-xl text-blue-500">
    INSERT INTO orders <br/>(order_id, customer_id, user_id, status, total, created_at) <br/>VALUES (1, 1, 1, 'Processing', 100.00, '2023-01-01');
      

    </div>

  </pre>;}
