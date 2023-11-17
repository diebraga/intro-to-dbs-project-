import { createItemForEachTable } from "@/utils/createItemForEachTable";
import { createOrderItems } from "@/utils/createOrderItems";
import { deleteAddedRecords } from "@/utils/deleteAddedRecords";
import { getAll } from "@/utils/getAll";


export default async function NewRecordsDeleted() {
  // await deleteAllUsers()
//   await createOrderItems()
  const data = await deleteAddedRecords();

  return <pre className="text-2xl p-10">{data}</pre>;
}
