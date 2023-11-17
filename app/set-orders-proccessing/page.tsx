import { createOrders } from "@/utils/createOrders";
import { getAll } from "@/utils/getAll";
import { setAllOrdersToProcessing } from "@/utils/setAllOrdersStatusToProccessing";


export default async function Orders() {
  // await deleteAllUsers()
  await setAllOrdersToProcessing()
  const data = await getAll("orders");

  return <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>;
}
