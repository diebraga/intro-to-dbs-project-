import { deleteOrder6monthsOld } from "@/utils/deleteOrder6monthsOld";
import { getAll } from "@/utils/getAll";
import { getTotalDaysOffOrdered } from "@/utils/getTotalDaysOffOrdered";


export default async function Users() {
  // await deleteAllUsers()
  const data =await getTotalDaysOffOrdered()

  return <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>;
}
