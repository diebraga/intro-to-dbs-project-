import { getAll } from "@/utils/getAll";


export default async function Orders() {
  // await deleteAllUsers()
//   await createOrders()
  const data = await getAll("orders");

  return <pre className="text-xs">{JSON.stringify(data, null, 2)}
  <div className="text-xl text-blue-500">
  SELECT * FROM orders
  </div>
  
  </pre>;}
  