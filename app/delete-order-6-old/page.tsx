import { deleteOrder6monthsOld } from "@/utils/deleteOrder6monthsOld";
import { getAll } from "@/utils/getAll";


export default async function Orders() {
  // await deleteAllUsers()
  await deleteOrder6monthsOld()
  const data = await getAll("orders");

  return <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>;
}
