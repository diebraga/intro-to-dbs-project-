import { createOrders } from "@/utils/createOrders";
import { getAll } from "@/utils/getAll";


export default async function Orders() {
  // await deleteAllUsers()
  await createOrders()
  const data = await getAll("orders");

  return <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>;
}
