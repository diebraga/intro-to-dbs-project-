import { deleteOrder6monthsOld } from "@/utils/deleteOrder6monthsOld";
import { getAll } from "@/utils/getAll";
import { getTotalDaysOffOrdered } from "@/utils/getTotalDaysOffOrdered";

export default async function Users() {
  // await deleteAllUsers()
  const data = await getTotalDaysOffOrdered();

  return (
    <pre className="text-xs">
      {JSON.stringify(data, null, 2)}
      <div className="text-xl text-blue-500">
        SELECT name, surname, annual_leave_allowance FROM users ORDER BY
        annual_leave_allowance ASC
      </div>
    </pre>
  );
}
