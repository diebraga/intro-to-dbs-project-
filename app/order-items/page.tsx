import { createOrderItems } from "@/utils/createOrderItems";
import { getAll } from "@/utils/getAll";


export default async function OrderItems() {
  // await deleteAllUsers()
//   await createOrderItems()
  const data = await getAll("order_items");

  return <pre className="text-xs">{JSON.stringify(data, null, 2)}
  <div className="text-xl text-blue-500">
  SELECT * FROM order_items
  </div>
  
  </pre>;}
  