import { getAll } from "@/utils/getAll";

export default async function Days() {
  //   await createStocks();
  const data = await getAll("days");

  return (
    <pre className="text-xs">
      {JSON.stringify(data, null, 2)}
      <div className="text-xl text-blue-500">SELECT * FROM days</div>
    </pre>
  );
}
