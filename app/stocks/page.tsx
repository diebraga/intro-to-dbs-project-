import { createOrders } from "@/utils/createOrders";
import { createStocks } from "@/utils/createStocks";
import { getAll } from "@/utils/getAll";
import { getUsersSortedBySalary } from "@/utils/getUsersSortedBySalary";
import { setAllOrdersToProcessing } from "@/utils/setAllOrdersStatusToProccessing";
import { setOrdersToShipped } from "@/utils/setPayedToShiped";


export default async function Stocks() {

//   await createStocks();
  const data = await getAll("stock");

  return <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>;
}
