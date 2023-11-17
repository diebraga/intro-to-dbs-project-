import { createItemForEachTable } from "@/utils/createItemForEachTable";
import { createOrderItems } from "@/utils/createOrderItems";
import { getAll } from "@/utils/getAll";


export default async function NewRecords() {
  // await deleteAllUsers()
//   await createOrderItems()
  const data = await createItemForEachTable();

  return <pre className="text-2xl p-10">{data}</pre>;
}
