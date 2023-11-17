import { createOrders } from "@/utils/createOrders";
import { getAll } from "@/utils/getAll";
import { getUsersSortedBySalary } from "@/utils/getUsersSortedBySalary";
import { setAllOrdersToProcessing } from "@/utils/setAllOrdersStatusToProccessing";
import { setOrdersToShipped } from "@/utils/setPayedToShiped";


export default async function UsersBySalary() {

  const data = await getUsersSortedBySalary("DESC");

  return <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>;
}
