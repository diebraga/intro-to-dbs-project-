import { createOrders } from "@/utils/createOrders";
import { getAll } from "@/utils/getAll";
import { setAllOrdersToProcessing } from "@/utils/setAllOrdersStatusToProccessing";

export default async function Orders() {
  // await deleteAllUsers()
  await setAllOrdersToProcessing();
  const data = await getAll("orders");

  return (
    <pre className="text-xs">
      {JSON.stringify(data, null, 2)}
      <div className="text-xl text-blue-500">
        {"UPDATE orders SET status = 'Processing'"}
      </div>
    </pre>
  );
}
