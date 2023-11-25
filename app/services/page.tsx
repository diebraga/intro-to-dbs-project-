import { getAll } from "@/utils/getAll";

export default async function Stocks() {
  const data = await getAll("services");

  return (
    <pre className="text-xs">
      {JSON.stringify(data, null, 2)}
      <div className="text-xl text-blue-500">SELECT * FROM services</div>
    </pre>
  );
}
