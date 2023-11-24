import { getAll } from "@/utils/getAll";
import { updateSundaysHours } from "@/utils/updateSunday";

export default async function Days() {
  await updateSundaysHours("closed Sundays", "closed Sundays");
  const data = await getAll("days");
  const updateSql = `UPDATE days SET opening_hour = 'closed Sundays', closing_hour = 'closed Sundays', ' WHERE day_of_week = 'Sunday'`;

  return (
    <pre className="text-xs">
      {JSON.stringify(data, null, 2)}
      <div className="text-xl text-blue-500">{updateSql}</div>
    </pre>
  );
}
