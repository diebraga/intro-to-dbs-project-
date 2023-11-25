import { createDeliveries } from "@/utils/createDeliveries";
import { getAll } from "@/utils/getAll";

export default async function Delivery() {
  await createDeliveries();
  const data = await getAll("deliveries");

  return (
    <pre className="text-xs">
      {JSON.stringify(data, null, 2)}
      <div className="text-xl text-blue-500">SELECT * FROM deliveries</div>
    </pre>
  );
}
