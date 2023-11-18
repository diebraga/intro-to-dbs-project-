import { RefreshComponent } from "@/components/RefreshComponent/RefreshComponent";
import { createItemForEachTable } from "@/utils/createItemForEachTable";
import { createOrderItems } from "@/utils/createOrderItems";
import { getAll } from "@/utils/getAll";
import {useRouter  } from "next/navigation";

export default async function NewRecords() {
  // await deleteAllUsers()
//   await createOrderItems()
  const data = await createItemForEachTable();

  return <pre className="text-2xl p-10">{data}<RefreshComponent/></pre>;
}
