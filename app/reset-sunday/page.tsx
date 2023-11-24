import { getAll } from "@/utils/getAll";
import { updateSundaysHours } from "@/utils/updateSunday";

export default async function Days() {
  await updateSundaysHours("08:00", "17:00");
  const data = await getAll("days");
  const updateSql = `UPDATE days SET opening_hour = '08:00', closing_hour = '17:00', WHERE day_of_week = 'Sunday'`;

  return (
    <pre className="text-xs">
      {JSON.stringify(data, null, 2)}
      <div className="text-xl text-blue-500">{updateSql}</div>
    </pre>
  );
}
